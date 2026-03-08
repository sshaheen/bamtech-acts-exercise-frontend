import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Astronaut } from '../models/astronaut';
import { DisplayAstronaut } from '../display-astronaut/display-astronaut';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AstronautDuty } from '../models/astronaut-duty';
import { DisplayAstronautDuty } from '../display-astronaut-duty/display-astronaut-duty';

@Component({
  selector: 'app-search-astronaut',
  imports: [DisplayAstronaut, DisplayAstronautDuty, FormsModule],
  templateUrl: './search-astronaut.html',
  styleUrl: './search-astronaut.css',
})
export class SearchAstronaut {
  astronaut = signal<Astronaut | undefined>(undefined);
  astronautDuties = signal<AstronautDuty[] | undefined>(undefined);
  inputName = '';
  searchedName = '';
  showError = signal(false);
  errorMessage = signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  getAstronaut() {
    this.searchedName = this.inputName;
    const subscription = this.httpClient
      .get<{
        person: Astronaut;
        astronautDuties: AstronautDuty[];
      }>(`http://localhost:5204/astronautduty/${this.searchedName}`)
      .subscribe({
        next: (resData) => {
          this.showError.set(false);
          this.astronaut.set(resData.person);
          this.astronautDuties.set(resData.astronautDuties);
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
