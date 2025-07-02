import { TruncatePipe } from './truncate-pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('truncates a text that is too long', () => {
    const pipe = new TruncatePipe();
    const result = pipe.transform('test', 3);
    expect(result).toBe('tes...');
  });

  it('does not truncate text that is short enough', () => {
    const pipe = new TruncatePipe();
    const result = pipe.transform('test', 4);
    expect(result).toBe('test');
  });
});
