import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
import {
  IonContent,
  IonToolbar,
  IonItem,
  IonList,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Discipline } from '../class/discipline/discipline';
import { TeacherDisciplines } from '../class/discipline/teacherDisciplines';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.page.html',
  styleUrls: ['./disciplines.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonItem,
    IonContent,
    IonToolbar,
    CommonModule,
    FormsModule,
    MyHeaderComponent,
    IonList,
    IonLabel,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    NgFor,
    NgIf,
  ],
})
export class DisciplinesPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  dataUrl = 'https://api.jsonbin.io/v3/b/67bd895cacd3cb34a8efe42c';

  disciplines: Discipline[] = [];
  teacherDisciplines: TeacherDisciplines[] = [];

  lineChart: any;

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: this.teacherDisciplines.map((teacherDiscipline) => {
          return teacherDiscipline.teacherName;
        }),
        datasets: [
          {
            label: 'Кількість дисциплін',
            data: this.teacherDisciplines.map((teacherDiscipline) => {
              return teacherDiscipline.countDisciplines;
            }),
            backgroundColor: 'rgb(0, 43, 172)',
          },
        ],
      },
    });
  }

  constructor() {
    Chart.register(...registerables);
  }

  async loadData() {
    let data: any = [];
    let response = await fetch(this.dataUrl);
    data = await response.json();

    data.record.disciplines.forEach((discipline: any) => {
      this.disciplines.push(
        new Discipline(
          discipline.name,
          discipline.department,
          discipline.lecturer,
          discipline.lab_teacher
        )
      );
    });

    const TeacherSet: Set<string> = new Set();
    this.disciplines.forEach((discipline) => {
      TeacherSet.add(discipline.teacher);
      TeacherSet.add(discipline.labTeacher);
    });

    TeacherSet.forEach((teacher) => {
      let teacherDiscipline = new TeacherDisciplines(teacher);
      this.disciplines.forEach((discipline) => {
        if (discipline.teacher === teacher) {
          teacherDiscipline.addDisciplineLecture(discipline);
        } else if (discipline.labTeacher === teacher) {
          teacherDiscipline.addDisciplineLab(discipline);
        }
      });
      this.teacherDisciplines.push(teacherDiscipline);
    });

    this.teacherDisciplines.forEach((teacherDiscipline) => {
      teacherDiscipline.tocountDisciplines();
    });
    this.teacherDisciplines.sort(
      (a, b) => a.countDisciplines - b.countDisciplines
    );

    this.lineChartMethod();
  }

  ngOnInit() {
    this.loadData();
  }
}
