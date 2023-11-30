import { Test, TestingModule } from '@nestjs/testing';
import { DbworkService } from './dbwork.service';

describe('DbworkService', () => {
  let service: DbworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbworkService],
    }).compile();

    service = module.get<DbworkService>(DbworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
