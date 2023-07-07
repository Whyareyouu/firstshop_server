import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface RoleCreationAttr {
    role: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttr> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'ADMIN', description: 'Роль пользователя'})
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    role: string;
    @ApiProperty({example: 'about role', description: 'Описание роли пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;
}