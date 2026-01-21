import { Component } from '@angular/core';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {IngredientForm} from '../form/ingredient-form/ingredient-form';
import {StepsForm} from '../form/step-form/step-form';


@Component({
  standalone: true,
  selector: 'app-recipe-new',
  imports: [FormsModule, IngredientForm, StepsForm],
  templateUrl: './recipe-new.html',
  styleUrl: './recipe-new.css',
})
export class RecipeNew {

  recipe = {
    name: '',
    servings: 1,
    ingredients: [{ name: '', amount: '', unit: '' }], // Must start with at least 1 item
    steps: ''
  };

  onSubmit() {
    //to probably have the api service class call somehow here
  }
}
