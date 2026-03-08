import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAstronaut } from './display-astronaut';

describe('DisplayAstronaut', () => {
  let component: DisplayAstronaut;
  let fixture: ComponentFixture<DisplayAstronaut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAstronaut],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayAstronaut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
