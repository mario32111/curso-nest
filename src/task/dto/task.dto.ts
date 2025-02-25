import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";


//ESTON HACE QUE VALIDE LOS DATOS QUE ENTRAN DESDE EL CLIENTE
export class TaskDTO{
    @IsNotEmpty()
    @IsString() 
    @MinLength(5)
    readonly description: string;
    @IsNotEmpty()
    @IsBoolean()
    readonly isDone: boolean;

}