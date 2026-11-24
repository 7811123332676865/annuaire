import { Component, computed, inject, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { PeopleService } from '../people.service';
import { PersonCard } from '../person-card/person-card';

@Component({
  imports: [FormField, PersonCard],
  selector: 'app-people-list',
  templateUrl: './people-list.html',
})
export class PeopleList {
  readonly peopleService = inject(PeopleService);

  filters = signal({ search: '' });
  filtersForm = form(this.filters);

  visiblePeople = computed(() => {
    const search = this.filters().search.trim().toLowerCase();
    return this.peopleService
      .people()
      .filter((person) => `${person.name.first} ${person.name.last}`.toLowerCase().includes(search));
  });
}
