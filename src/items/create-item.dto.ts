import { IsString, IsInt } from 'class-validator';
import { isString } from 'util';

export class CreateItemDto {
    @IsString() readonly name: string;

    @IsInt() readonly price: number;
}