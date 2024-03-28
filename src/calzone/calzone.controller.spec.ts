import { Test, TestingModule } from '@nestjs/testing';
import { CalzoneController } from './calzone.controller';
import { CalzoneService } from './calzone.service';

describe('CalzoneController', () => {
  let controller: CalzoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalzoneController],
      providers: [CalzoneService],
    }).compile();

    controller = module.get<CalzoneController>(CalzoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
