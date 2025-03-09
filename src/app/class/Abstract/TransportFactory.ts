import { Cutter } from './Cutter';
import { Boat } from './Boat';
import { transportNameMap } from './TransportName';
import { WaterTransport } from './WaterTransport';

export class TransportFactory {
  public static getFigure(
    name: string,
    speed: number,
    capacity: number,
    spec: any
  ): WaterTransport {
    if (name === transportNameMap['Cutter']) {
      return new Cutter(name, speed, capacity, spec);
    } else if (name === transportNameMap['Boat']) {
      return new Boat(name, speed, capacity, spec);
    } else {
      throw new Error('Invalid transport name');
    }
  }
}
