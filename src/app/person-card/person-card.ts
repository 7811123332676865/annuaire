import { Component, input } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  imports: [],
  selector: 'app-person-card',
  templateUrl: './person-card.html',
})
export class PersonCard {
  person = input.required<Person>();
}
