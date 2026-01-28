import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {Recipe} from '../../models/recipe.models';

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    { id: 1, name: 'Spaghetti', ingredients: [], steps: ['Boil water', 'Cook pasta'], imageLoc: 'assets/recipeImage/SpagBol.jpg', servings: 2 },
    { id: 2, name: 'Tacos', ingredients: [], steps: ['Cook meat', 'Assemble'], imageLoc: 'assets/recipeImage/Tacos.jpg', servings: 2 },
  ];

}
