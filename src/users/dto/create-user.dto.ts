import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'Name', description: 'Имя пользователя'})
    readonly first_name: string;
    @ApiProperty({example: 'SecondName', description: 'Фамилия пользователя'})

    readonly second_name: string;
    @ApiProperty({example: 'Username', description: 'Никнейм пользователя'})
    readonly username: string;
    @ApiProperty({example: 'test@mail.ru', description: 'Почтовый адрес пользователя'})
    readonly email: string;
    @ApiProperty({example: 'password', description: 'Пароль пользователя'})
    readonly password: string;
}