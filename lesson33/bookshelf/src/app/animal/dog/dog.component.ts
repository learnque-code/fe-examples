import {Component, OnInit} from '@angular/core';
import {DoggiesService} from "./doggies.service";
import {Dog} from "./dog.model";
import {Dogs} from "./dogs.type";
import {DogsBehaviours} from "./dog-behaviour.type";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  public dogs: Dogs = [];
  public dogsBehaviours: DogsBehaviours | null = null;

  // Constructor injection
  constructor(private doggiesService: DoggiesService) {
  }

  ngOnInit(): void {
    this.doggiesService.getDogImageMetadata().subscribe((dogs: Dogs) => {
      this.dogs = dogs;
    });
  }

  onDogClick(event: Event, dog: Dog) {
    console.log(event);
    alert(dog.name);
  }

  randomStyle() {
    return "";
  }
}
