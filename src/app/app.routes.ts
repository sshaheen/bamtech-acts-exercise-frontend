import { Routes } from '@angular/router';
import { GetAllPersons } from './get-all-persons/get-all-persons';
import { SearchPerson } from './search-person/search-person';

export const routes: Routes = [
  {
    path: 'people',
    component: GetAllPersons,
  },
  {
    path: 'search-person',
    component: SearchPerson,
  },
];
