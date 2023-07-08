import {ApiProperty} from "@nestjs/swagger";

export class CreateProductDto{
    @ApiProperty()
    readonly title: string;
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly image: string;
    @ApiProperty()
    readonly provider: string;
}