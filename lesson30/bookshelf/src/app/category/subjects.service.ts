import { Injectable } from '@angular/core';
import {Subjects} from "./subjects.type";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjects: Subjects = [
    "Fiction",
    "Science"
  ]

  constructor() { }

  getSubjects(): Subjects {
    return this.subjects;
  }
}
