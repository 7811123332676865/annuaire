import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { PeopleService } from '../../services/people.service';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  private readonly peopleService = inject(PeopleService);
  private readonly favoritesService = inject(FavoritesService);

  peopleCount = computed(() => this.peopleService.count());
  favoritesCount = computed(() => this.favoritesService.count());
}
