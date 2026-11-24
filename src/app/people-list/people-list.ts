import { Component, inject } from '@angular/core';
import { PeopleService } from '../people.service';
import { PersonCard } from '../person-card/person-card';

@Component({
  imports: [PersonCard],
  selector: 'app-people-list',
  templateUrl: './people-list.html',
})
export class PeopleList {
  readonly peopleService = inject(PeopleService);
}
