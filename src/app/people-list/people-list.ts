import { Component, computed, inject, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { FavoritesService } from '../favorites.service';
import { PeopleService } from '../people.service';
import { PersonCard } from '../person-card/person-card';

@Component({
  imports: [FormField, PersonCard],
  selector: 'app-people-list',
  templateUrl: './people-list.html',
})
export class PeopleList {
  readonly peopleService = inject(PeopleService);
  readonly favoritesService = inject(FavoritesService);

  filters = signal({ search: '', gender: 'all' });
  filtersForm = form(this.filters);

  readonly pageSize = 10;
  page = signal(1);

  visiblePeople = computed(() => {
    const search = this.filters().search.trim().toLowerCase();
    const gender = this.filters().gender;
    return this.peopleService
      .people()
      .filter((person) => gender === 'all' || person.gender === gender)
      .filter((person) => `${person.name.first} ${person.name.last}`.toLowerCase().includes(search));
  });

  pageCount = computed(() => Math.max(1, Math.ceil(this.visiblePeople().length / this.pageSize)));

  pagedPeople = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.visiblePeople().slice(start, start + this.pageSize);
  });
}
