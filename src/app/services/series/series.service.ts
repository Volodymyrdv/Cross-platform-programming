import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private xy = new Map();
  private factorialCache: Map<number, number> = new Map([
    [0, 1],
    [1, 1],
  ]);
  constructor(@Optional() private LogService: LogService) {}
  private getFactorial(n: number): number {
    if (!this.factorialCache.has(n)) {
      this.factorialCache.set(n, n * this.getFactorial(n - 1));
    }
    return this.factorialCache.get(n)!;
  }
  getSeries(x: number) {
    let sum = Math.PI / 2 - x,
      min = 1e-12,
      mem = 1,
      n = 1;
    do {
      const fact2n = this.getFactorial(2 * n);
      const factN = this.getFactorial(n);
      mem =
        (fact2n * Math.pow(x, 2 * n + 1)) /
        (Math.pow(4, n) * factN * factN * (2 * n + 1));
      sum -= mem;
      n++;
    } while (Math.abs(mem) > min);

    return sum;
  }
  getTab(xn: number = -1, xk: number = 1, h: number = 0.1) {
    let y = 0;
    for (let x = xn; x <= xk; x += h) {
      y = this.getSeries(x);
      this.xy.set(x.toFixed(2), y);
      if (this.LogService) {
        this.LogService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
      }
    }
    return this.xy;
  }
}
