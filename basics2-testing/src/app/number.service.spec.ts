import { NumberService } from './number.service';

describe('NumberService', () => {
  let service: NumberService;

  beforeEach(() => {
    service = new NumberService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a number', () => {
    expect(service.getRandomNumber()).toBeInstanceOf(Number);
  });

  it('generating a number should add an element to the history', () => {
    service.getRandomNumber();
    expect(service.getNumberHistory().length).toBe(1);
    service.getRandomNumber();
    expect(service.getNumberHistory().length).toBe(2);
  });

  it('a generated number should be added to the history', () => {
    const number = service.getRandomNumber();
    expect(service.getNumberHistory()).toContain(number);
  });

  it('the previous number should be undefined if there is no previous number in the history', () => {
    expect(service.getPreviousNumber()).toBeUndefined();
  });

  it('should return the second-to-last number as previous number', () => {
    const firstNumber = service.getRandomNumber();
    const secondNumber = service.getRandomNumber();
    const thirdNumber = service.getRandomNumber();
    expect(service.getPreviousNumber()).toEqual(secondNumber);
  });
});
