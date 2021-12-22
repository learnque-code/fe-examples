import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubjectsService} from "./subjects.service";
import {Subjects} from "./subjects.type";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public subjects: Subjects = [];
  @Input()
  public subject: string = "";
  @Output()
  public subjectChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.subjectsService.getSubjects().subscribe((subjects: Subjects) => {
      this.subjects = subjects;
    });
  }

  onChangeSubject($event: MouseEvent, subject: string) {
    $event.preventDefault();
    this.subjectChange.emit(subject);
  }
}
