import { Component, input } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-field-error',
  templateUrl: './field-error.html',
})
export class FieldError {
  field = input.required<FieldTree<unknown>>();
}
