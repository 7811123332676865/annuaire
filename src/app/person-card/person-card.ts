import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Person } from '../models/person.model';

@Component({
  imports: [RouterLink],
  selector: 'app-person-card',
  templateUrl: './person-card.html',
})
export class PersonCard {
  person = input.required<Person>();
  favorite = input(false);
  toggleFavorite = output<Person>();
}
