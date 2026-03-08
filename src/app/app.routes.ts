import { Routes } from '@angular/router';
import { GetAllPersons } from './get-all-persons/get-all-persons';
import { SearchPerson } from './search-person/search-person';
import { CreatePerson } from './create-person/create-person';
import { CreateAstronaut } from './create-astronaut/create-astronaut';
import { SearchAstronaut } from './search-astronaut/search-astronaut';

export const routes: Routes = [
  {
    path: 'people',
    component: GetAllPersons,
  },
  {
    path: 'search-person',
    component: SearchPerson,
  },
  {
    path: 'create-person',
    component: CreatePerson,
  },
  {
    path: 'create-astronaut',
    component: CreateAstronaut,
  },
  {
    path: 'search-astronaut',
    component: SearchAstronaut,
  },
];
