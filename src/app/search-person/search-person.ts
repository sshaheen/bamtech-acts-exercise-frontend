import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { DisplayPerson } from '../display-person/display-person';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-person',
  imports: [DisplayPerson, FormsModule],
  templateUrl: './search-person.html',
  styleUrl: './search-person.css',
})
export class SearchPerson {
  person = signal<Person | undefined>(undefined);
  inputName = '';
  searchedName = '';
  showError = signal(false);
  errorMessage = signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  getPerson() {
    this.searchedName = this.inputName;
    const subscription = this.httpClient
      .get<{ person: Person }>(`http://localhost:5204/person/${this.searchedName}`)
      .subscribe({
        next: (resData) => {
          this.showError.set(false);
          this.person.set(resData.person);
        },
        error: (error) => {
          this.errorMessage.set(error.error.message);
          this.showError.set(true);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
