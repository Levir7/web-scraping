import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'priceHistory_Dollar'})
export class DOLLARTableHistory {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;
    
    @Column('decimal')
    cierre: number;

    @Column('decimal')
    variacion: number;

    @Column()
    tipoDeCambio?: string = 'MXN';


}