import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "./subjects.service";
import {Subjects} from "./subjects.type";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public subjects: Subjects = [];

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.subjects = this.subjectsService.getSubjects();
  }

  onChangeSubject($event: MouseEvent, subject: string) {
    console.log("Selected subject: ", subject);
  }
}
