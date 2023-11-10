import { Test, TestingModule } from '@nestjs/testing';
import { EdgeMachineService } from './master.edgemachine.service';

describe('EdgeMachineService', () => {
  let service: EdgeMachineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdgeMachineService],
    }).compile();

    service = module.get<EdgeMachineService>(EdgeMachineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
