import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeListComponent {
  recipes = [
    { id: '1', name: 'Spaghetti', ingredients: ['pasta', 'tomato'], steps: ['Boil water', 'Cook pasta'], imageLoc: 'assets/recipeImage/SpagBol.jpg' },
    { id: '2', name: 'Tacos', ingredients: ['tortilla', 'beef'], steps: ['Cook meat', 'Assemble'], imageLoc: 'assets/recipeImage/Tacos.jpg' }
  ];

}
