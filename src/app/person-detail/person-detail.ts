import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  imports: [RouterLink],
  selector: 'app-person-detail',
  templateUrl: './person-detail.html',
})
export class PersonDetail {
  readonly peopleService = inject(PeopleService);
  id = input.required<string>();

  person = computed(() => this.peopleService.people().find((person) => person.login.uuid === this.id()));
}
