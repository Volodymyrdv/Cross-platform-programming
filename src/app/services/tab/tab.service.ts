import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
@Injectable({
  providedIn: 'root',
})
export class TabService {
  private xx: string[] = [];
  private yy: number[] = [];
  constructor(@Optional() private LogService: LogService) {}
  getTab(xn: number = -1, xk: number = 1, h: number = 0.1) {
    this.xx = [];
    this.yy = [];
    let y = 0;
    for (let x = xn; x <= xk; x += h) {
      y = Math.acos(x);
      this.xx.push(x.toFixed(2));
      this.yy.push(y);
      if (this.LogService) {
        this.LogService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
      }
    }
    return { x: this.xx, y: this.yy };
  }
}
