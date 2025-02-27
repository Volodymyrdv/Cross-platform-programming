import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonMenu,
  IonToolbar,
  IonContent,
  IonTitle,
  IonList,
  IonItem,
  IonMenuToggle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonMenu,
    IonToolbar,
    IonContent,
    IonTitle,
    IonList,
    IonItem,
    IonMenuToggle,
  ],
})
export class AppComponent {
  constructor() {}
}
