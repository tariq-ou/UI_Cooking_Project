// import { Component } from '@angular/core';
// import {FormBuilder, FormsModule, Validators} from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import {IngredientForm} from '../form/ingredient-form/ingredient-form';
// import {StepsForm} from '../form/step-form/step-form';
// import {Recipe} from '../../models/recipe.models';
// import {CommonModule} from '@angular/common';
//
//
// @Component({
//   standalone: true,
//   selector: 'app-recipe-new',
//   imports: [FormsModule, IngredientForm, StepsForm],
//   templateUrl: './recipe-new.html',
//   styleUrl: './recipe-new.css',
// })
// export class RecipeNew {
//
//   //recipe: Recipe | null = null;
//
//   recipe: Recipe = {
//     id: 0,
//     name: '',
//     servings: 1,
//     ingredients: [],
//     steps: [],
//     imageLoc: ''
//   };
//
//   onImageSelected(event: Event) {
//     const fileInput = event.target as HTMLInputElement;
//     const file = fileInput.files?.[0];
//
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.recipe.imageLoc = reader.result as string; // Base64 preview
//       };
//       reader.readAsDataURL(file);
//     }
//   }
//
//   onSubmit() {
//     //to probably have the api service class call somehow here
//   }
// }


import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IngredientForm } from '../form/ingredient-form/ingredient-form';
import { StepsForm } from '../form/step-form/step-form';
import { Recipe } from '../../models/recipe.models';

@Component({
  standalone: true,
  selector: 'app-recipe-new',
  imports: [FormsModule, IngredientForm, StepsForm],
  templateUrl: './recipe-new.html',
  styleUrl: './recipe-new.css',
})
export class RecipeNew implements OnInit {

  private route = inject(ActivatedRoute);

  recipe: Recipe = {
    id: 0,
    name: '',
    servings: 1,
    ingredients: [],
    steps: [],
    imageLoc: ''
  };

  // ⭐ Runs when page loads
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) return; // add mode → keep blank form

    const id = parseInt(idParam, 10);

    // TEMP: mock data (later this comes from RecipeService)
    if (id === 1) {
      this.recipe = {
        id: 1,
        name: 'Spaghetti',
        servings: 2,
        ingredients: [
          { name: 'pasta', amount: 90, unit: 'grams' },
          { name: 'tomato', amount: 400, unit: 'ml' }
        ],
        steps: ['Boil water', 'Cook pasta'],
        imageLoc: 'assets/recipeImage/SpagBol.jpg'
      };
    }

    if (id === 2) {
      this.recipe = {
        id: 2,
        name: 'Tacos',
        servings: 2,
        ingredients: [],
        steps: ['Cook meat', 'Assemble'],
        imageLoc: 'assets/recipeImage/Tacos.jpg'
      };
    }
  }

  onImageSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.recipe.imageLoc = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {

    if (this.recipe.id === 0) {
      console.log('CREATE recipe', this.recipe);
      // create endpoint later
    } else {
      console.log('UPDATE recipe', this.recipe);
      // update endpoint later
    }

  }
}
