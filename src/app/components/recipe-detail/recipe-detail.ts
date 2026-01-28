import { Component, inject } from '@angular/core';
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
export class RecipeDetail {
  route = inject(ActivatedRoute);
  recipeId: string | null = null;

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    // Use this ID to fetch recipe details from API or local state
  }

  recipe: Recipe = {
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
