import { Test, TestingModule } from '@nestjs/testing';
import { NotificatiionsService } from './notificatiions.service';

describe('NotificatiionsService', () => {
  let service: NotificatiionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificatiionsService],
    }).compile();

    service = module.get<NotificatiionsService>(NotificatiionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
