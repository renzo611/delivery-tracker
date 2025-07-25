import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./role.entity";

@Entity('users')
export class User {
    @PrimaryColumn({ type: 'int', nullable: false })
    id: number

    @Column({ type: 'varchar', nullable: false, length: 255})
    email: string

    @Column({ type: 'varchar', nullable: false, length: 255})
    password: string

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

    @Column({ type: 'varchar', nullable: false, length:255})
    second_address: string

    @CreateDateColumn({ name: 'created_at', type: 'datetime'})
    created_at: Date

    @UpdateDateColumn({ type: 'datetime', name:'last_updated'})
    last_updated: Date

    @ManyToMany(
        () => Role, 
        role => role.users,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
        @JoinTable({
            name: 'student_course',
            joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
            },
            inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
            },
        })
  roles?: Role[];

}
