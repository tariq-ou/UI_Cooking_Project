import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {Recipe} from '../../models/recipe.models';
import {CookingApi} from '../../services/CookingApi/cookingapi';
import {Observable} from 'rxjs';
import { buildImageUrl } from '../../utils/tools';

@Component({
  standalone: true,
  selector: 'app-recipe-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeListComponent implements OnInit {

  // recipes: Recipe[] = [
  //   { id: 1, name: 'Spaghetti', ingredients: [], steps: ['Boil water', 'Cook pasta'], imagePath: 'assets/recipeImage/SpagBol.jpg', servings: 2 },
  //   { id: 2, name: 'Tacos', ingredients: [], steps: ['Cook meat', 'Assemble'], imagePath: 'assets/recipeImage/Tacos.jpg', servings: 2 },
  // ];

  //recipes: Recipe[] = [];

  constructor(private recipeService: CookingApi) {
    //console.log('RecipeList instance ID:', Math.random());
  }

  recipes$!: Observable<Recipe[]>;
  // this.recipes$ = this.recipeService.getAllRecipes();


  ngOnInit(): void {

    // console.log('RecipeList: ngOnInit');
    // this.recipeService.getAllRecipes().subscribe({
    //   next: (data) => {
    //     console.log('RecipeList: received', data, 'count=', Array.isArray(data) ? data.length : 'not array');
    //     //this.recipes = data;
    //   },
    //   error: (err) => {
    //     console.error('Failed to load recipes', err)
    //     ;
    //   }

      this.recipes$ = this.recipeService.getAllRecipes();


    };

  protected readonly buildImageUrl = buildImageUrl;
}
