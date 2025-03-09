export abstract class WaterTransport {
  name: string;
  speed: number;
  capacity: number;
  constructor(name: string, speed: number, capacity: number) {
    if (speed < 0) throw new Error('Speed must be greater than 0');
    if (capacity < 0) throw new Error('Capacity must be greater than 0');
    this.name = name;
    this.speed = speed;
    this.capacity = Math.floor(capacity);
  }
  getSpeed(): number {
    return this.speed;
  }

  displayInfo(): string {
    return `Тип = (${this.name}) Швидкість = (${this.speed} км/год) Місткість = (${this.capacity} місць)`;
  }
}
