import {  Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { InvestingDataDto } from './dtos/create.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { COPPERTableHistory, DOLLARTableHistory, STEELTableHistory } from './entities';

@Injectable()
export class InvestingService {

  constructor(
    @InjectRepository(STEELTableHistory) private readonly STEELRepository: Repository<STEELTableHistory>,
    @InjectRepository(COPPERTableHistory) private readonly COPPERRepository: Repository<COPPERTableHistory>,
    @InjectRepository(DOLLARTableHistory) private readonly DOLLARRepository: Repository<DOLLARTableHistory>,
  ){}

  async scrape(url: string){
    const data = await this.scraping(url)

    return  this.convertData(data)
  }

  //* SCRAPING URL METHODS
  async scraping(url: string) {
    // Ejecutamos el navegador
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Extraemos los datos
    const data = await page.evaluate(() => {
      const scrapedData = [];
      document.querySelectorAll('tbody tr').forEach((row) => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 6) {
          scrapedData.push({
            fecha: cells[0]?.innerText || '',
            cierre: cells[1]?.innerText || '',
            variation: cells[6]?.innerText || '',
          });
        }
      });
      return scrapedData.filter( r => ( r.fecha !== '') );
    });

    await browser.close();
    return data;
  }


  //* CONVERT DATA METHODS
  convertData(data: {fecha: string; cierre: string; variation: string}[]){
    
    const dataFormated = data.map( item => {
      const {cierre, variation, fecha} = item;
      const cierreNumber = parseFloat(cierre);
      const variationNumber = parseFloat(variation);
      const fechaDate = this.convertDate(fecha)
      // * retornamos un objeto convertido por cada item del objeto dentro de data
      return {
        cierre: cierreNumber,
        variacion: variationNumber,
        fecha: fechaDate
      }
    })
    console.log({dataFormated})
   return dataFormated; 
  }


  convertDate(cadenaFecha: string): Date | null {
    const [day, month, year] = cadenaFecha.split('.').map(Number);
  
    // Verifica si los componentes son números válidos
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      // Resta 1 al mes (enero es 0 en JavaScript)
      return new Date(year, month - 1, day);
    } else {
      console.error('La cadena de fecha no es válida:', cadenaFecha);
      return null;
    }
  }


  
  // * INSERT METHODS
  async insertOnDB(data: InvestingDataDto[], tableName: string){

    const results = []
    data.forEach(element => {
      
      if(tableName === 'STEEL'){
        results.push(this.createSTEEL(element, tableName))
      }

      if(tableName === 'COPPER'){
        results.push(this.createCOPPER(element, tableName))
      }

      if(tableName === 'DOLLAR'){
        results.push(this.createDOLLAR(element, tableName))
      }

      return
    });
    await Promise.all(results)
    return {message: "executed"}
  }


  async createSTEEL(data: InvestingDataDto, tableName: string){
    const duplicated = await this.finOneRegister(data.fecha, tableName)
    if(duplicated){
      return
    }
    const item = this.STEELRepository.create(data)
    return await this.STEELRepository.save(item);
  }
  async createCOPPER(data: InvestingDataDto, tableName: string){
    const duplicated = await this.finOneRegister(data.fecha, tableName)
    if(duplicated){
      return
    }
    const item = this.COPPERRepository.create(data)
    return await this.COPPERRepository.save(item);
  }
  async createDOLLAR(data: InvestingDataDto, tableName: string){
    const duplicated = await this.finOneRegister(data.fecha, tableName)
    if(duplicated){
      return
    }
    const item = this.DOLLARRepository.create(data)
    return await this.DOLLARRepository.save(item);
  }



  async finOneRegister(fecha: Date,  tablaName: string ){
    let register:STEELTableHistory;
    
   try {

    if(tablaName === 'STEEL'){
      register = await this.STEELRepository.findOne({where: {fecha: fecha}})
      return register;
    }
    // * busqueda en repositorio COPPER
    if(tablaName === 'COPPER'){
      register = await this.COPPERRepository.findOne({where: {fecha: fecha}})
      return register;
    }
    
    if(tablaName === 'DOLLAR'){
      register = await this.DOLLARRepository.findOne({where: {fecha: fecha}})
      return register;
    }

   } catch (error) {
    throw new Error(error);
   }
  }
}
