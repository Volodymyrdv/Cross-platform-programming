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
import { MyHeaderComponent } from '../my-header/my-header.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
    NgIf,
  ],
})
export class Tab2Page {
  evenNumbers: number[] = [];
  sum: number = 0;
  calculator(a: any, b: any): void {
    this.evenNumbers = [];
    this.sum = 0;
    try {
      a = parseInt(a);
      b = parseInt(b);
    } catch (error) {
      console.error('Error');
      return;
    }
    if (a < 0 || b < 0) {
      console.error('Error');
      return;
    }
    if (a > b) {
      [a, b] = [b, a];
    }
    const isEven = (num: number): boolean => num % 2 === 0;
    for (let i = a; i <= b; i++) {
      if (isEven(i)) {
        this.evenNumbers.push(i);
        this.sum += i;
      }
    }
  }
}
