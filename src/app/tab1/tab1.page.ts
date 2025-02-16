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
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
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
    NgIf,
  ],
})
export class Tab1Page {
  result: number = 0;
  calculator(a: any, b: any, c: any): void {
    try {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
    } catch (error) {
      console.error('Error');
      return;
    }
    const isEven = (num: number): boolean => num % 2 === 0;
    const sum: number = a + b + c;
    if (isEven(a) || isEven(b) || isEven(c)) {
      this.result = Math.pow(sum, 3);
    } else if (!isEven(sum)) {
      this.result = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    } else {
      this.result = 0;
      console.error('Error');
      return;
    }
  }
  constructor() {}
}
