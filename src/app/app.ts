import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { GetAllPersons } from './get-all-persons/get-all-persons';
import { SearchPerson } from './search-person/search-person';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, GetAllPersons, SearchPerson],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('exercise-front-end');
}
