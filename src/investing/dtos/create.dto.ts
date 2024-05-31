import { Type } from "class-transformer";
import { IsDate, IsNumber } from "class-validator";

export class InvestingDataDto {

    @IsDate()
    fecha: Date;

    @IsNumber()
    @Type(() => Number)
    cierre: number

    @IsNumber()
    @Type(() => Number)
    variacion: number


}