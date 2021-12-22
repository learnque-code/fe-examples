import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {
  public dogForm = this.fb.group({
    dogName: ['', Validators.compose([
      Validators.required, Validators.min(3)
    ])],
    dogType: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.dogForm.value);
    // httpClient.post<Dog>(``, this.dogForm.value)
  }
}
