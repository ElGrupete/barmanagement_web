import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSuggestionComponent } from './chef-suggestion.component';

describe('ChefSuggestionComponent', () => {
  let component: ChefSuggestionComponent;
  let fixture: ComponentFixture<ChefSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
