import { Controller, Get } from '@nestjs/common';
import { InvestingService } from './investing.service';
import { cooperURL, dollarUsdURL, steelURL } from 'src/config/envs/urls';
import { SEED_DOLLAR, COPPER_SEED, SEED_STEEL} from 'src/seed';

@Controller('investing')
export class InvestingController {
  constructor(private readonly investingService: InvestingService) {}
  @Get('/scrape')
  async scrapingSteel() {
    const dataSTEEL = await this.investingService.scrape(steelURL);
    await this.investingService.insertOnDB(dataSTEEL, 'STEEL');

    const dataCOPPER = await this.investingService.scrape(cooperURL);
    await this.investingService.insertOnDB(dataCOPPER, 'COPPER');

    const dataDOLLAR = await this.investingService.scrape(dollarUsdURL);
    await this.investingService.insertOnDB(dataDOLLAR, 'DOLLAR');
    return { message: 'Success' };
  }

  @Get('/seed')
  async scrapingSteelSEED() {
    const dataConvertedDOLLAR = this.investingService.convertData(SEED_DOLLAR)
    // const dataSTEEL = await this.investingService.scrape(steelURL);
    await this.investingService.insertOnDB(dataConvertedDOLLAR, 'DOLLAR');
    
    const dataConvertedCOPPER = this.investingService.convertData(COPPER_SEED)
    // const dataSTEEL = await this.investingService.scrape(steelURL);
    await this.investingService.insertOnDB(dataConvertedCOPPER, 'COPPER');
    
    const dataConvertedSTEEL = this.investingService.convertData(SEED_STEEL)
    // const dataSTEEL = await this.investingService.scrape(steelURL);
    await this.investingService.insertOnDB(dataConvertedSTEEL, 'STEEL');
    
    return { message: 'Success' };
  }

//   @Get('/copper')
//   async scrapingCooper() {
//     const data = await this.investingService.scrape(cooperURL);
//     return await this.investingService.insertOnDB(data, 'COPPER');
//   }
//   @Get('/dollar')
//   async scrapingDollarUSD() {
//     const data = await this.investingService.scrape(dollarUsdURL);
//     return await this.investingService.insertOnDB(data, 'DOLLAR');
//   }
}
