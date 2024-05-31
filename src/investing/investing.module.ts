import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { COPPERTableHistory, DOLLARTableHistory, STEELTableHistory } from "./entities";
import { InvestingService } from "./investing.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([
            STEELTableHistory,
            DOLLARTableHistory,
            COPPERTableHistory
        ])
    ], 
    providers: [ InvestingService ],
    exports: [ InvestingService, TypeOrmModule ],
})
export class InvestingModule {}