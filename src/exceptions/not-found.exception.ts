import { HttpStatus } from '@nestjs/common';
import { AppException } from './app.exception';

export class NotFoundException extends AppException {
  constructor(text) {
    super(`${text} is not found.`, HttpStatus.NOT_FOUND);
  }
}
