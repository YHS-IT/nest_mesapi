import { Test, TestingModule } from '@nestjs/testing';
import { DbflowService } from './dbflow.service';

describe('DbflowService', () => {
  let service: DbflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbflowService],
    }).compile();

    service = module.get<DbflowService>(DbflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
