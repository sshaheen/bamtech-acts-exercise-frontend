import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAstronaut } from './create-astronaut';

describe('CreateAstronaut', () => {
  let component: CreateAstronaut;
  let fixture: ComponentFixture<CreateAstronaut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAstronaut],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAstronaut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
