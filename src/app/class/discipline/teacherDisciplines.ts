import { Discipline } from './discipline';
export class TeacherDisciplines {
  teacherName: string;
  disciplinesLecture: string[][] = [];
  disciplinesLab: string[][] = [];
  countDisciplines: number;

  constructor(teacherName: string) {
    this.teacherName = teacherName;
    this.countDisciplines = 0;
  }
  addDisciplineLecture(discipline: Discipline) {
    this.disciplinesLecture.push([discipline.name, discipline.department]);
  }

  addDisciplineLab(discipline: Discipline) {
    this.disciplinesLab.push([discipline.name, discipline.department]);
  }
  tocountDisciplines() {
    this.countDisciplines =
      this.disciplinesLecture.length + this.disciplinesLab.length;
  }
}
