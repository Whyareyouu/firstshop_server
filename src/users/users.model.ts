import {Column, DataType, Table, Model} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs{
    first_name: string;

    second_name: string;
    username: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'Name', description: 'Имя пользователя'})
    @Column({type: DataType.STRING,allowNull: false})
    first_name: string;
    @ApiProperty({example: 'SecondName', description: 'Фамилия пользователя'})
    @Column({type: DataType.STRING,allowNull: false})
    second_name: string;
    @ApiProperty({example: 'Username', description: 'Никнейм пользователя'})
    @Column({type: DataType.STRING,allowNull: false, unique: true})
    username: string;
    @ApiProperty({example: 'test@mail.ru', description: 'Почтовый адрес пользователя'})
    @Column({type: DataType.STRING,allowNull: false, unique: true})
    email: string;
    @ApiProperty({example: 'password', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING,allowNull: false})
    password: string;
}