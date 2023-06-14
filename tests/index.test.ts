import { sum } from '../src/functions';

describe('testing index file', () => {
  test('12+2=14', () => {
    expect(sum('12','2')).toBe('14');
  });
});