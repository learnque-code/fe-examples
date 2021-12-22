import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoggiesService {
  private names: string[] = [
    "Spygle",
    "Barsukas",
    "Morka",
    "Tobis",
    "Tuzikas",
    "Durpe",
    "Bobikas"
  ];

  constructor() {
  }

  printDogName(name: string): void {
    console.log(`Hello ${name}`);
  }

  getDogsNames(): string[] {
    return this.names;
  }
}
