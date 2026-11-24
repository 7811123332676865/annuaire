import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { PeopleService } from '../people.service';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  readonly peopleService = inject(PeopleService);
  readonly favoritesService = inject(FavoritesService);
}
