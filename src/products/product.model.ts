import {Column, DataType, Table, Model, BelongsToMany, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-role.model";
import {User} from "../users/users.model";

interface ProductCreationAttrs{
    title: string;

    price: number;
    description: string;
    image: string;
    userId: number;
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'title', description: 'Название товара'})
    @Column({type: DataType.STRING,allowNull: false, unique: true})
    title: string;
    @ApiProperty({example: '100', description: 'Цена товара'})
    @Column({type: DataType.INTEGER, allowNull: false})
    price: string;
    @ApiProperty({example: 'description', description: 'Описание товара'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;
    @ApiProperty({example: 'file', description: 'Картинка описывающая товар'})
    @Column({type: DataType.STRING, allowNull: false})
    image: string;
    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER})
    userId: number;
    @BelongsTo(()=> User)
    provider: User;
}