import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from './users/users.module';
import {User} from "./users/users.model";
import {RolesModule} from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-role.model";
import {AuthModule} from './auth/auth.module';
import {FileModule} from './file/file.module';
import {ProductsModule} from './products/products.module';
import {Product} from "./products/product.model";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Product],
            autoLoadModels: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname,'client'),
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        FileModule,
        ProductsModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule {
}