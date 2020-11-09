import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMealComponent } from './starter-meal.component';

describe('StarterMealComponent', () => {
  let component: StarterMealComponent;
  let fixture: ComponentFixture<StarterMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
