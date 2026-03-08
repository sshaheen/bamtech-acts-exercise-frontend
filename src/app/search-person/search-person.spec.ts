import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPerson } from './search-person';

describe('SearchPerson', () => {
  let component: SearchPerson;
  let fixture: ComponentFixture<SearchPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPerson],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPerson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
