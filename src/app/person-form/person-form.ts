import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormField, FormRoot, email, form, max, min, minLength, required } from '@angular/forms/signals';
import { PeopleService } from '../people.service';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-person-form',
  templateUrl: './person-form.html',
})
export class PersonForm {
  private readonly peopleService = inject(PeopleService);
  private readonly router = inject(Router);

  contact = signal({
    first: '',
    last: '',
    gender: 'female',
    age: 0,
    email: '',
    phone: '',
    city: '',
  });

  contactForm = form(
    this.contact,
    (path) => {
      required(path.first, { message: 'Le prénom est obligatoire.' });
      minLength(path.first, 2, { message: '2 caractères au moins.' });
      required(path.last, { message: 'Le nom est obligatoire.' });
      min(path.age, 1, { message: "L'âge doit dépasser 0." });
      max(path.age, 120, { message: "L'âge ne peut pas dépasser 120." });
      required(path.email, { message: "L'email est obligatoire." });
      email(path.email, { message: "L'email n'est pas valide." });
      required(path.city, { message: 'La ville est obligatoire.' });
    },
    { submission: { action: async () => this.send() } },
  );

  async send(): Promise<void> {
    const contact = this.contact();
    const id = crypto.randomUUID();
    this.peopleService.add({
      login: { uuid: id },
      gender: contact.gender,
      name: { first: contact.first, last: contact.last },
      email: contact.email,
      phone: contact.phone,
      cell: '',
      dob: { age: contact.age },
      location: { city: contact.city, country: 'France' },
      picture: { large: 'https://randomuser.me/api/portraits/lego/1.jpg' },
    });
    await this.router.navigateByUrl(`/personnes/${id}`);
  }
}
