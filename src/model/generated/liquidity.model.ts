import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Liquidity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('text')
    assetName1!: string;

    @Column('text')
    assetName2!: string;

    @Column('bigint')
    asset1!: bigint;

    @Column('bigint')
    asset2!: bigint;

    @Column('bigint')
    balance1!: bigint;

    @Column('bigint')
    balance2!: bigint;

    constructor(data?: Partial<Liquidity>) {
        Object.assign(this, data);
    }
}