import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type AstronautDuty = {
  name: string;
  rank: string;
  dutyTitle: string;
  dutyStartDate: string;
};

@Component({
  selector: 'app-create-astronaut',
  imports: [FormsModule],
  templateUrl: './create-astronaut.html',
  styleUrl: './create-astronaut.css',
})
export class CreateAstronaut {
  astronaut: AstronautDuty = {
    name: '',
    rank: '',
    dutyTitle: '',
    dutyStartDate: '',
  };

  createdAstronautName = '';
  createdAstronautRank = '';
  createdAstronautDutyTitle = '';

  dutyEndDate = '';

  success = signal(false);
  errorMsg = signal('');

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  createAstronaut() {
    const dateVal = new Date(this.dutyEndDate);
    this.astronaut.dutyStartDate = dateVal.toISOString();
    this.createdAstronautName = this.astronaut.name;
    this.createdAstronautRank = this.astronaut.rank;
    this.createdAstronautDutyTitle = this.astronaut.dutyTitle;
    const body = JSON.stringify(this.astronaut);
    const subscription = this.httpClient
      .post<{
        success: boolean;
      }>('http://localhost:5204/astronautduty', body, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (result) => {
          this.success.set(result.success);
          this.errorMsg.set('');
        },
        error: (error) => {
          this.success.set(error.success);
          this.errorMsg.set(error.error.message);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
