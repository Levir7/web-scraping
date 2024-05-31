import { Controller, Get } from '@nestjs/common';
import { InvestingService } from './investing.service';
import { cooperURL, dollarUsdURL, steelURL } from 'src/config/envs/urls';

@Controller('investing')
export class InvestingController {

    constructor(
        private readonly investingService: InvestingService,
    ) { }
    @Get('/steel')
    async scrapingSteel(){
        const data= await this.investingService.scrape(steelURL);
        return await this.investingService.insertOnDB(data, 'STEEL')
    }

    @Get('/copper')
    async scrapingCooper(){
        const data= await this.investingService.scrape(cooperURL);
        return await this.investingService.insertOnDB(data, 'COPPER')
    }
    @Get('/dollar')
    async scrapingDollarUSD(){
        const data= await this.investingService.scrape(dollarUsdURL);
        return await this.investingService.insertOnDB(data, 'DOLLAR')
    }
}
