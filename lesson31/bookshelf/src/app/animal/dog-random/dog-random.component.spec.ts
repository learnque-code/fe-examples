import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogRandomComponent } from './dog-random.component';

describe('DogRandomComponent', () => {
  let component: DogRandomComponent;
  let fixture: ComponentFixture<DogRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
