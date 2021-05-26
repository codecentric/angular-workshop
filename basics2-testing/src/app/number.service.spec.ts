import { NumberService } from './number.service';

describe('NumberService', () => {
  let service: NumberService;

  beforeEach(() => {
    service = new NumberService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
