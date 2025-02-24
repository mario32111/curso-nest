import { Injectable } from '@nestjs/common';

//se le pone el decorador @Injectable() para que se pueda inyectar en otros servicios
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World dev!';
  }
}
