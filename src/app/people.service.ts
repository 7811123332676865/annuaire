import { Service, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { PeopleResponse, Person } from './models/person.model';

@Service()
export class PeopleService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://randomuser.me/api/';

  private readonly peopleState = signal<Person[]>([]);
  private readonly loadingState = signal(true);
  private readonly errorState = signal<string | null>(null);

  readonly people = this.peopleState.asReadonly();
  readonly loading = this.loadingState.asReadonly();
  readonly error = this.errorState.asReadonly();

  constructor() {
    this.load();
  }

  add(person: Person): void {
    this.peopleState.update((people) => [person, ...people]);
  }

  async load(): Promise<void> {
    if (this.peopleState().length > 0) return;
    this.loadingState.set(true);
    this.errorState.set(null);
    try {
      const response = await firstValueFrom(
        this.http.get<PeopleResponse>(`${this.url}?seed=cda2&results=30&nat=fr`),
      );
      this.peopleState.set(response.results);
    } catch {
      this.errorState.set("L'annuaire est indisponible.");
    } finally {
      this.loadingState.set(false);
    }
  }
}
