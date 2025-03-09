import { WaterTransport } from './WaterTransport';

export class Cutter extends WaterTransport {
  engineType: string;
  constructor(
    override name: string,
    override speed: number,
    override capacity: number,
    engineType: string
  ) {
    super(name, speed, capacity);
    this.engineType = engineType;
  }

  override displayInfo(): string {
    return `${super.displayInfo()} Тип двигуна = (${this.engineType})`;
  }
}
