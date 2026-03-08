import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePerson } from './create-person';

describe('CreatePerson', () => {
  let component: CreatePerson;
  let fixture: ComponentFixture<CreatePerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePerson],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePerson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
