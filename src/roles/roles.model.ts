import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-role.model";

interface RoleCreationAttr {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttr> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'admin', description: 'Роль пользователя'})
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    value: string;
    @ApiProperty({example: 'about role', description: 'Описание роли пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(()=> User, ()=> UserRoles)
    users: User[]
}