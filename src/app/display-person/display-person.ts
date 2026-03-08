import { Component, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-display-person',
  imports: [],
  templateUrl: './display-person.html',
  styleUrl: './display-person.css',
})
export class DisplayPerson {
  @Input({ required: true }) person!: Person;
}
