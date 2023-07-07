import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto{
    @ApiProperty({example: 'admin', description: 'Роль пользователя'})
    readonly value: string;
    @ApiProperty({example: 'about role', description: 'Описание роли пользователя'})
    readonly description: string;
}