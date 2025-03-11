import { TransportFactory } from './TransportFactory';

describe('Testing TransportFactory', () => {
  it('Створення лодки', () => {
    let boat = TransportFactory.getFigure('Лодка', 4.5, 2, true);
    expect(boat).toBeTruthy();
  });

  it('Створення катера', () => {
    let cutter = TransportFactory.getFigure('Катер', 4.5, 2, 'Бензиновий');
    expect(cutter).toBeTruthy();
  });

  it('Створення корабля', () => {
    let ship = TransportFactory.getFigure('Корабель', 4.5, 2, 'Титанік');
    expect(ship).toBeTruthy();
  });

  it('Створення невідомого екземпляру', () => {
    expect(() => {
      TransportFactory.getFigure('Трактор', 4.5, 2, 'Титанік');
    }).toThrow(new Error('Invalid transport name'));
  });
});
