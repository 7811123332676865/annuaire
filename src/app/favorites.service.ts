import { Service, computed, effect, signal } from '@angular/core';
import { Person } from './models/person.model';

@Service()
export class FavoritesService {
  private readonly idsState = signal<string[]>(JSON.parse(localStorage.getItem('favorites') ?? '[]'));

  readonly ids = this.idsState.asReadonly();
  readonly count = computed(() => this.idsState().length);

  constructor() {
    effect(() => {
      localStorage.setItem('favorites', JSON.stringify(this.idsState()));
    });
  }

  isFavorite(id: string): boolean {
    return this.idsState().includes(id);
  }

  toggle(person: Person): void {
    const id = person.login.uuid;
    if (this.isFavorite(id)) {
      this.idsState.update((ids) => ids.filter((favoriteId) => favoriteId !== id));
    } else {
      this.idsState.update((ids) => [...ids, id]);
    }
  }
}
