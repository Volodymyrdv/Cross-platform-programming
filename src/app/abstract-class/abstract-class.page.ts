import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { WaterTransport } from '../class/Abstract/WaterTransport';
import { TransportFactory } from '../class/Abstract/TransportFactory';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [
    MyHeaderComponent,
    IonContent,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
  ],
})
export class AbstractClassPage implements OnInit {
  data: any = [];
  transport: WaterTransport[] = [];
  transportTop: WaterTransport[] = [];
  dataURL: string = 'https://api.jsonbin.io/v3/b/67cd9f76acd3cb34a8f79ed6';
  async loadData() {
    this.data = [];
    this.transport = [];
    await fetch(this.dataURL)
      .then((res) => res.json())
      .then((data) => {
        this.data = data.record;
        this.data.forEach((element: any) => {
          let instance = TransportFactory.getFigure(
            element.name,
            element.speed,
            element.capacity,
            element.spec
          );
          this.transport.push(instance);
        });
      });
  }
  filterTopTransport(n: any) {
    try {
      n = parseInt(n);
    } catch (error) {
      console.error('Error');
      return;
    }
    this.transportTop = this.transport
      .sort((a, b) => b.speed - a.speed)
      .slice(0, n);
  }

  ngOnInit(): void {
    this.loadData();
  }
}
