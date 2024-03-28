import { Test, TestingModule } from '@nestjs/testing';
import { CalzoneService } from './calzone.service';

describe('CalzoneService', () => {
  let service: CalzoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalzoneService],
    }).compile();

    service = module.get<CalzoneService>(CalzoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
