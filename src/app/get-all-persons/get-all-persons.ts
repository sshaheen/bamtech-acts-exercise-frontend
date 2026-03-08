import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { DisplayPerson } from '../display-person/display-person';

@Component({
  selector: 'app-get-all-persons',
  imports: [DisplayPerson],
  templateUrl: './get-all-persons.html',
  styleUrl: './get-all-persons.css',
})
export class GetAllPersons implements OnInit {
  people = signal<Person[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.httpClient
      .get<{ people: Person[] }>('http://localhost:5204/person')
      .subscribe({
        next: (resData) => {
          this.people.set(resData.people);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
