import { Component } from '@angular/core';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {IngredientForm} from '../form/ingredient-form/ingredient-form';
import {StepsForm} from '../form/step-form/step-form';
import {Recipe} from '../../models/recipe.models';
import {CommonModule} from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-recipe-new',
  imports: [FormsModule, IngredientForm, StepsForm],
  templateUrl: './recipe-new.html',
  styleUrl: './recipe-new.css',
})
export class RecipeNew {

  //recipe: Recipe | null = null;

  recipe: Recipe = {
    id: 0,
    name: '',
    servings: 1,
    ingredients: [],
    steps: [],
    imageLoc: ''
  };

  onImageSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.recipe.imageLoc = reader.result as string; // Base64 preview
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    //to probably have the api service class call somehow here
  }
}
