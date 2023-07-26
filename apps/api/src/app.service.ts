import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a = 5
    a = 'str'
    return 'Hello World!';
  }
}
