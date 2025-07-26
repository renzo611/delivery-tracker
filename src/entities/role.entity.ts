import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('role')
export class Role {
    @PrimaryColumn({ type: 'int'})    
    id: number

    @Column({ name: 'role_name', length: 50, type: 'varchar' })
    role_name: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
    created_at: Date

    @UpdateDateColumn({ type: 'timestamp', name:'last_updated'})
    last_updated: Date

    @ManyToMany(
        () => User,
        user => user.roles,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
    )
    users?: User[];
}