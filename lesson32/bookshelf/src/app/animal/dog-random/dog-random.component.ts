import {AfterContentInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dog-random',
  templateUrl: './dog-random.component.html',
  styleUrls: ['./dog-random.component.scss']
})
export class DogRandomComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  @Input()
  public dogName: string = "";
  @Input()
  public goodNames: string[] = [];

  private nextDogName: string = "";

  constructor() {
    console.log("Constructing objects");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(changes.dogName.currentValue, changes.dogName.previousValue);
    if (changes.dogName.currentValue !== changes.dogName.previousValue) {
      console.log("Got new value!!!");
    }
    console.log("On changes");
  }

  ngOnInit(): void {
    console.log("On init");
  }

  ngOnDestroy(): void {
    console.log("On destroy");
  }

  onClick() {
    this.nextDogName = this.dogName;

    while (this.dogName === this.nextDogName) {
      this.nextDogName = this.goodNames[Math.floor(Math.random() * this.goodNames.length)];
    }
    this.dogName = this.nextDogName;
  }

  ngAfterContentInit(): void {
    console.log("After content init");
  }

  getDogs() {
    return ['x', 'y'];
  }
}

