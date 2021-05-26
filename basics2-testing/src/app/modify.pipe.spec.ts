import { ModifyPipe } from './modify.pipe';

describe('ModifyPipe', () => {
  it('create an instance', () => {
    const pipe = new ModifyPipe();
    expect(pipe).toBeTruthy();
  });

  [
    { input: 0, result: 2 },
    { input: -1, result: 1 },
    { input: 1, result: 3 },
    { input: 5, result: 7 },
    { input: 12512512, result: 12512514 },
    { input: -12211, result: -12209 },
  ].forEach((parameter) => {
    it(`should return ${parameter.result} for input ${parameter.input}`, () => {
      const pipe = new ModifyPipe();
      expect(pipe.transform(parameter.input)).toBe(parameter.result);
    });
  });
});
