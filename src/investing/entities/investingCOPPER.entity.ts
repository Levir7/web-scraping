import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'priceHistory_Copper'})
export class COPPERTableHistory {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;
    
    @Column('decimal')
    cierre: number;

    @Column('decimal')
    variacion: number;

    @Column()
    tipoDeCambio?: string = 'USD';
}