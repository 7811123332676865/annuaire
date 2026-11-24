import { Component, inject } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  readonly peopleService = inject(PeopleService);
}
