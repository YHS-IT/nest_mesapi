import { Test, TestingModule } from '@nestjs/testing';
import { DbflowController } from './dbflow.controller';

describe('DbflowController', () => {
  let controller: DbflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbflowController],
    }).compile();

    controller = module.get<DbflowController>(DbflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
