import { PartialType } from '@nestjs/mapped-types';
import { CreateCalzoneDto } from './create-calzone.dto';

export class UpdateCalzoneDto extends PartialType(CreateCalzoneDto) {}
