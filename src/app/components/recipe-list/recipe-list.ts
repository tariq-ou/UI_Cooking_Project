import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  imports: [CommonModule ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeListComponent {
  recipes = [
    { name: 'Spaghetti', ingredients: ['pasta', 'tomato'], steps: ['Boil water', 'Cook pasta'], imageLoc: 'assets/recipeImage/SpagBol.jpg' },
    { name: 'Tacos', ingredients: ['tortilla', 'beef'], steps: ['Cook meat', 'Assemble'], imageLoc: 'assets/recipeImage/Tacos.jpg' }
  ];

}
