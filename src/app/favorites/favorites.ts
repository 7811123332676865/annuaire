import { Component, computed, inject } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { PeopleService } from '../people.service';
import { PersonCard } from '../person-card/person-card';

@Component({
  imports: [PersonCard],
  selector: 'app-favorites',
  templateUrl: './favorites.html',
})
export class Favorites {
  readonly peopleService = inject(PeopleService);
  readonly favoritesService = inject(FavoritesService);

  favoritePeople = computed(() =>
    this.peopleService
      .people()
      .filter((person) => this.favoritesService.isFavorite(person.login.uuid)),
  );
}
