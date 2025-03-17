import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonItem,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonInput,
  IonButton,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { TabService } from '../services/tab/tab.service';
import { SeriesService } from '../services/series/series.service';
import { RecursionService } from '../services/recursion/recursion.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MyHeaderComponent,
    IonCard,
    IonCardHeader,
    IonItem,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonInput,
    IonButton,
    IonLabel,
    NgFor,
    IonList,
  ],
})
export class ServicepagePage implements OnInit {
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput: string[] = [];

  constructor(
    private tabServise: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService
  ) {
    Chart.register(...registerables);
  }

  xx: string[] = [];
  yySeries: number[] = [];
  yyRecursion: number[] = [];
  yyTab: number[] = [];

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  lineChart: any;

  lineChartMake() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Series',
            data: this.yySeries,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            fill: false,
            pointRadius: 2,
          },
          {
            label: 'Recursion',
            data: this.yyRecursion,
            borderColor: 'rgb(1, 1, 1)',
            borderWidth: 1,
            fill: false,
            pointRadius: 4,
          },
          {
            label: 'Tabulation',
            data: this.yyTab,
            borderColor: 'rgb(47, 232, 10)',
            borderWidth: 1,
            fill: false,
            pointRadius: 6,
          },
        ],
      },
    });
  }

  input() {
    this.yySeries = [];
    this.yyRecursion = [];
    this.xyInput = [];
    this.xx.forEach((value, index) => {
      let s = '';
      let y: number = 0;
      y = this.yyTab[index];
      s = y.toFixed(4) + ' ';

      y = this.xySeries.get(value);
      this.yySeries.push(y);
      s = s + y.toFixed(4);

      y = this.xyRecursion.get(value);
      this.yyRecursion.push(y);
      s = s + ' ' + y.toFixed(4);
      console.log(s);

      this.xyInput.push(s);
    });
  }

  ras(xn: any, xk: any, h: any) {
    try {
      let xn1 = parseFloat(xn);
      let xk1 = parseFloat(xk);
      let h1 = parseFloat(h);

      this.xx = [];
      this.yyTab = [];

      console.log('Tabulation');
      let obj = this.tabServise.getTab(xn1, xk1, h1);
      this.xx = obj.x;
      this.yyTab = obj.y;

      console.log('Series');
      this.xySeries = this.seriesService.getTab(xn1, xk1, h1);

      console.log('Recursion');
      this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);

      this.input();

      this.lineChartMake();
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit() {}
}
