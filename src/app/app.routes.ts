import { Routes } from '@angular/router';
import { Favorites } from './pages/favorites/favorites';
import { favoritesGuard } from './guards/favorites-guard';
import { PeopleList } from './pages/people-list/people-list';
import { PersonDetail } from './pages/person-detail/person-detail';
import { PersonForm } from './pages/person-form/person-form';

export const routes: Routes = [
  { path: '', component: PeopleList },
  { path: 'personnes/:id', component: PersonDetail },
  { path: 'favoris', component: Favorites, canActivate: [favoritesGuard] },
  { path: 'ajouter', component: PersonForm },
];
