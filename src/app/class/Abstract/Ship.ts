import { WaterTransport } from './WaterTransport';

export class Ship extends WaterTransport {
  nameShip: string;

  constructor(
    override name: string,
    override speed: number,
    override capacity: number,
    nameShip: string
  ) {
    super(name, speed, capacity);
    this.nameShip = nameShip;
  }

  override displayInfo(): string {
    return `${super.displayInfo()} Назва корабля = (${this.nameShip})`;
  }
}
