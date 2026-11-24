import { Routes } from '@angular/router';
import { PeopleList } from './people-list/people-list';
import { PersonDetail } from './person-detail/person-detail';

export const routes: Routes = [
  { path: '', component: PeopleList },
  { path: 'personnes/:id', component: PersonDetail },
];
