import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Recipe} from '../../models/recipe.models';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})

// export class RecipeDetail {
//   route = inject(ActivatedRoute);
//   recipeId: number | null = null;
//
//   ngOnInit() {
//     this.recipeId = this.route.snapshot.paramMap.get('id');
//     // Use this ID to fetch recipe details from API or local state
//   }
//
//   recipe: Recipe = {
//     id: this.recipeId,
//     name: 'Spaghetti',
//     servings: 2,
//     ingredients: [
//       { name: 'pasta', amount: 90, unit: 'grams' },
//       { name: 'tomato', amount: 400, unit: 'ml' }
//     ],
//     steps: ['Boil water', 'Cook pasta'],
//     imageLoc: 'assets/recipeImage/SpagBol.jpg'
//   };
// }


export class RecipeDetail implements OnInit {
  route = inject(ActivatedRoute);
  recipe: Recipe | null = null;

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

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
    } else if (id === 2) {
      this.recipe = {
        id: 2,
        name: 'Tacos',
        servings: 2,
        ingredients: [],
        steps: ['Cook meat', 'Assemble'],
        imageLoc: 'assets/recipeImage/Tacos.jpg'
      };
    } else {
      this.recipe = null; // Optionally handle "not found" here
    }
  }
}
