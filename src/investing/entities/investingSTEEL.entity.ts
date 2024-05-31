import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'priceHistory_steel-coil'})
export class STEELTableHistory {
    
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