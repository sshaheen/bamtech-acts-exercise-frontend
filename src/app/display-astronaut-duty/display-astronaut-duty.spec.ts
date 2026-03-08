import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAstronautDuty } from './display-astronaut-duty';

describe('DisplayAstronautDuty', () => {
  let component: DisplayAstronautDuty;
  let fixture: ComponentFixture<DisplayAstronautDuty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAstronautDuty],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayAstronautDuty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
