import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn({ type: 'int', nullable: false })
    id: number

    @Column({ type: 'varchar', nullable: false, length:255})
    name: string

    @Column({ type: 'varchar', nullable: false, length:255})
    last_name: string

    @Column({ type: 'varchar', nullable: false, length:255})
    phone_number: string

    @Column({ type: 'varchar', nullable: false, length:255})
    country: string

    @Column({ type: 'varchar', nullable: false, length:255})
    province: string

    @Column({ type: 'varchar', nullable: false, length:255})
    address: string

    @CreateDateColumn({ name: 'created_at', type: 'datetime'})
    created_at: Date

    @UpdateDateColumn({ type: 'datetime', name:'last_updated'})
    last_updated: Date

}
