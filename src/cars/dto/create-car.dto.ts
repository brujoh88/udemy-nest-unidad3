import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateCarDto {
    @IsNotEmpty()
    @IsString()
    readonly brand: string;
    @IsNotEmpty()    
    @IsString()
    @MaxLength(15, { message: 'El modelo es muy largo' })
    readonly model: string;
}