import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.scss']
})
export class DogPageComponent implements OnInit {
  public defaultDogName: string = "Alfred";
  public dogNames: string[] = ["Bobik", "Tuzik", "Spygle"];

  constructor() { }

  ngOnInit(): void {
  }

}
