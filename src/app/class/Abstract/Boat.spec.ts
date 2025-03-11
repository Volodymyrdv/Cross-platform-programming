import { Boat } from './Boat';

describe('Testing Boat', () => {
  let boat: Boat;

  beforeEach(() => {
    boat = new Boat('Лодка', 6.4, 4, false);
  });

  it('Створення екземпляру класу', () => {
    expect(boat).toBeTruthy();
  });

  it('Створення екземпляру класу з відємною швидкістю', () => {
    expect(() => {
      new Boat('Лодка', -6.4, 4, false);
    }).toThrow(new Error('Speed must be greater than 0'));
  });

  it('Створення екземпляру класу з відємною кількістю місць', () => {
    expect(() => {
      new Boat('Лодка', 6.4, -4, false);
    }).toThrow(new Error('Capacity must be greater than 0'));
  });

  it('Перевірка методу getSpeed()', () => {
    expect(boat.getSpeed()).toBe(6.4);
  });
});
