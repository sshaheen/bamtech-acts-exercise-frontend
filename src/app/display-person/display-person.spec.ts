import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPerson } from './display-person';

describe('DisplayPerson', () => {
  let component: DisplayPerson;
  let fixture: ComponentFixture<DisplayPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPerson],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayPerson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
