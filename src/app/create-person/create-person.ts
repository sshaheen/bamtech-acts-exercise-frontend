import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-person',
  imports: [FormsModule],
  templateUrl: './create-person.html',
  styleUrl: './create-person.css',
})
export class CreatePerson {
  inputName = '';
  createdPersonName = '';
  success = signal(false);

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  createPerson() {
    this.createdPersonName = this.inputName;
    const body = JSON.stringify(this.createdPersonName);
    const subscription = this.httpClient
      .post<{
        success: boolean;
      }>('http://localhost:5204/person', body, { headers: { 'Content-Type': 'application/json' } })
      .subscribe({
        next: (result) => this.success.set(result.success),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
