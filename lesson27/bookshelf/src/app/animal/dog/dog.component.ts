import {Component, OnInit} from '@angular/core';
import {DoggiesService} from "./doggies.service";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  public names: string[] = [];

  // Constructor injection
  constructor(private doggiesService: DoggiesService) {
  }

  ngOnInit(): void {
    this.names = this.doggiesService.getDogsNames();
    console.log(this.names.toString());
  }

}
