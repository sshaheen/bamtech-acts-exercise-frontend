import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPersons } from './get-all-persons';

describe('GetAllPersons', () => {
  let component: GetAllPersons;
  let fixture: ComponentFixture<GetAllPersons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllPersons],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAllPersons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
