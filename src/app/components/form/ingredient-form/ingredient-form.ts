import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Ingredient} from '../../../models/recipe.models';
@Component({
  standalone: true,
  selector: 'app-ingredient-form',
  imports: [
    FormsModule,CommonModule,
  ],
  templateUrl: './ingredient-form.html',
  styleUrl: './ingredient-form.css',
})


export class IngredientForm {

  @Input() ingredients: Ingredient[] = [];
  @Output() ingredientsChange = new EventEmitter<typeof this.ingredients>();

  addIngredient() {
    this.ingredients.push({ name: '', amount: 0  , unit: '' });
    this.ingredientsChange.emit(this.ingredients);
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.emit(this.ingredients);
  }
}
