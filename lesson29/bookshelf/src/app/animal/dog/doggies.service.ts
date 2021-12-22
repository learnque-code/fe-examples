import {Injectable} from '@angular/core';
import {Dogs} from "./dogs.type";
import {DogsBehaviours} from "./dog-behaviour.type";

@Injectable({
  providedIn: 'root'
})
export class DoggiesService {
  private dogs: Dogs = [
    {
      name: 'Spygle',
      age: 0.33,
      masters: [
        {
          firstName: 'Viktor',
          lastName: 'Nareiko',
        },
        {
          firstName: 'Sigita',
          lastName: 'Nareiko'
        }
      ]
    },
    {
      name: 'Barsukas',
      masters: [{
        firstName: 'Jonas',
        lastName: 'Jonaitis'
      }]
    },
    {
      name: 'Morka',
      masters: [
        {
          firstName: 'Jonas',
          lastName: 'Jonaitis'
        },
        {
          firstName: 'Kazlas',
          lastName: 'Kazlauskas'
        }
      ]
    },
  ];

  private behaviours: DogsBehaviours = {
    "Beagle": "They are cheerful dogs that like affection.",
    "Labrador Retriever": "Intelligent, kind and agile.",
    "English Bulldog": "Has a sweet, gentle disposition."
  }

  constructor() {
  }

  printDogName(name: string): void {
    console.log(`Hello ${name}`);
  }

  getDogs(): Dogs {
    return this.dogs;
  }

  getDogsBehaviours(): DogsBehaviours {
    return this.behaviours;
  }
}
