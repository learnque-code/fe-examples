import { Component } from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'bookshelf';
  public defaultDogName: string = 'Morka';
  public dogNames: string[] = ['Alfred', 'Fredrik', 'Tobis'];

  changeDefaultValue() {
    this.defaultDogName = this.dogNames[Math.floor(Math.random() * this.dogNames.length)];
    this.dogNames = [...this.dogNames];
  }
}
