import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAstronaut } from './search-astronaut';

describe('SearchAstronaut', () => {
  let component: SearchAstronaut;
  let fixture: ComponentFixture<SearchAstronaut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAstronaut],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchAstronaut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
