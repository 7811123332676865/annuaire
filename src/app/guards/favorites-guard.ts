import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FavoritesService } from '../services/favorites.service';

export const favoritesGuard: CanActivateFn = () => {
  if (inject(FavoritesService).count() > 0) {
    return true;
  }
  return inject(Router).parseUrl('/');
};
