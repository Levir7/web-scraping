import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'priceHistory_Dollar'})
export class DOLLARTableHistory {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;
    
    @Column('decimal', { precision: 8, scale: 2 })
    cierre: number;

    @Column('decimal', { precision: 8, scale: 2 })
    variacion: number;

    @Column()
    tipoDeCambio?: string = 'MXN';


}