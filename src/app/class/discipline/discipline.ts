export class Discipline {
  name: string;
  department: string;
  teacher: string;
  labTeacher: string;
  constructor(
    name: string,
    department: string,
    teacher: string,
    labTeacher: string
  ) {
    this.name = name;
    this.department = department;
    this.teacher = teacher;
    this.labTeacher = labTeacher;
  }
}
