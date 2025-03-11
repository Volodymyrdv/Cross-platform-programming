import { Cutter } from './Cutter';

describe('Testing Cutter', () => {
  let cutter: Cutter;

  beforeEach(() => {
    cutter = new Cutter('Катер', 6.4, 4, 'Бензиновий');
  });

  it('Створення екземпляру класу', () => {
    expect(cutter).toBeTruthy();
  });

  it('Створення екземпляру класу з відємною швидкістю', () => {
    expect(() => {
      new Cutter('Катер', -6.4, 4, 'Бензиновий');
    }).toThrow(new Error('Speed must be greater than 0'));
  });

  it('Створення екземпляру класу з відємною кількістю місць', () => {
    expect(() => {
      new Cutter('Катер', 6.4, -4, 'Бензиновий');
    }).toThrow(new Error('Capacity must be greater than 0'));
  });

  it('Перевірка методу getSpeed()', () => {
    expect(cutter.getSpeed()).toBe(6.4);
  });
});
