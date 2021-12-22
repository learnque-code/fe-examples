import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "./subjects.service";
import {Subjects} from "./subjects.type";
import {Subject} from "rxjs";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public subjects: Subjects = [];
  public selectedSubject: string = "";

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.subjectsService.getSubjects().then((subjects: Subjects) => {
      this.subjects = subjects;
    });
  }

  onChangeSubject($event: MouseEvent, subject: string) {
    this.selectedSubject = subject;
    console.log("Selected subject: ", this.selectedSubject);
  }
}
