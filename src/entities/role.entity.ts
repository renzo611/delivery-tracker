import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('role')
export class Role {
    @PrimaryColumn({ type: 'number'})    
    id: number

    @Column({ name: 'role_name', length: 50, type: 'varchar' })
    role_name: string

    @CreateDateColumn({ name: 'created_at', type: 'datetime'})
    created_at: Date

    @UpdateDateColumn({ type: 'datetime', name:'last_updated'})
    last_updated: Date

    @ManyToMany(
        () => User,
        user => user.roles,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
    )
    users?: User[];
}