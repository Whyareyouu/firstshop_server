import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }
    @ApiOperation({summary: 'Auth login'})
    @ApiResponse({status: 200, description: 'The record has been successfully created.'})
    @Post('/login')
    login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto)
    }
}
