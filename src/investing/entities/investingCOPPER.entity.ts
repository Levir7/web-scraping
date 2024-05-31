import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'priceHistory_Copper'})
export class COPPERTableHistory {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;
     
    @Column("decimal", { precision: 8, scale: 4 })
    cierre: number;

    @Column("decimal", { precision: 8, scale: 2 })
    variacion: number;
  
    @Column() 
    tipoDeCambio?: string = 'USD';
} 