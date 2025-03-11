import { Ship } from './Ship';

describe('Testing Ship', () => {
  let ship: Ship;

  beforeEach(() => {
    ship = new Ship('Корабель', 6.4, 4, 'Титанік');
  });

  it('Створення екземпляру класу', () => {
    expect(ship).toBeTruthy();
  });

  it('Створення екземпляру класу з відємною швидкістю', () => {
    expect(() => {
      new Ship('Корабель', -6.4, 4, 'Титанік');
    }).toThrow(new Error('Speed must be greater than 0'));
  });

  it('Створення екземпляру класу з відємною кількістю місць', () => {
    expect(() => {
      new Ship('Корабель', 6.4, -4, 'Титанік');
    }).toThrow(new Error('Capacity must be greater than 0'));
  });

  it('Перевірка методу getSpeed()', () => {
    expect(ship.getSpeed()).toBe(6.4);
  });
});
