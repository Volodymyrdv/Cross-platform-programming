import { Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { NgFor, NgClass } from '@angular/common';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonCard,
    MyHeaderComponent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    NgFor,
    NgClass,
  ],
})
export class Tab3Page {
  result: number[][] = [];
  count_of_negative_numbers: number = 0;
  calculator(N: any): void {
    this.result = [];
    this.count_of_negative_numbers = 0;
    try {
      N = parseInt(N);
    } catch (error) {
      console.error('Error');
      return;
    }
    if (N < 0) {
      console.error('Error');
      return;
    }
    for (let i = 0; i < N; i++) {
      this.result.push([]);
      for (let j = 0; j < N; j++) {
        this.result[i].push(Math.floor(Math.random() * 101) - 50);
      }
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (this.result[i][j] < 0 && this.result[i][j] % 2 === 0) {
          this.count_of_negative_numbers++;
        }
      }
    }
  }
}
