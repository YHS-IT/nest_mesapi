import { Test, TestingModule } from '@nestjs/testing';
import { EdegeMachineController } from './master.edgemachine.controller';

describe('EdegeMachineController', () => {
  let controller: EdegeMachineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdegeMachineController],
    }).compile();

    controller = module.get<EdegeMachineController>(EdegeMachineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
