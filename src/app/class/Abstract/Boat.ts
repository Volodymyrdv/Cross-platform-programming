import { WaterTransport } from './WaterTransport';
export class Boat extends WaterTransport {
  isRowing: boolean;
  constructor(
    override name: string,
    override speed: number,
    override capacity: number,
    isRowing: boolean
  ) {
    super(name, speed, capacity);
    this.isRowing = isRowing;
  }

  override displayInfo(): string {
    return `${super.displayInfo()} Має весла = (${this.isRowing})`;
  }
}
