import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Recipe} from '../../models/recipe.models';
import {CommonModule} from '@angular/common';
import {CookingApi} from '../../services/CookingApi/cookingapi';
import {buildImageUrl} from '../../utils/tools';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})

export class RecipeDetail implements OnInit {
  route = inject(ActivatedRoute);
  recipe: Recipe | null = null;
  loading = true;
  idNotNull: number = -1;

  constructor(private recipeService: CookingApi,
              private cdr: ChangeDetectorRef) {
    //console.log('RecipeList instance ID:', Math.random());
  }

  ngOnInit() {
    // if (id === 1) {
    //   this.recipe = {
    //     id: 1,
    //     name: 'Spaghetti',
    //     servings: 2,
    //     ingredients: [
    //       { name: 'pasta', amount: 90, unit: 'grams' },
    //       { name: 'tomato', amount: 400, unit: 'ml' }
    //     ],
    //     steps: ['Boil water', 'Cook pasta'],
    //     imagePath: 'assets/recipeImage/SpagBol.jpg'
    //   };
    // } else if (id === 2) {
    //   this.recipe = {
    //     id: 2,
    //     name: 'Tacos',
    //     servings: 2,
    //     ingredients: [],
    //     steps: ['Cook meat', 'Assemble'],
    //     imagePath: 'assets/recipeImage/Tacos.jpg'
    //   };
    // } else {
    //   this.recipe = null; // Optionally handle "not found" here
    // };


    const idParam = this.route.snapshot.paramMap.get('id');
    const id =  idParam ? parseInt(idParam, 10) : null;
    if (id != null) {this.idNotNull = id;}


    if (id !== null) {
      this.recipeService.getRecipeById(id).subscribe({
        next: recipe => {
          console.log("Recipe returned:", recipe);
          this.recipe = recipe;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: err => {
          console.error("Error loading recipe:", err);
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }

  }

  confirmDelete() {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');

    if (confirmDelete) {
      this.recipeService.deleteRecipe(this.idNotNull).subscribe({
        next: () => {
          alert('Recipe deleted!');
          window.history.back();
        },
        error: err => {
          console.error('Delete failed:', err);
        }
      });
    }
  }

  protected readonly buildImageUrl = buildImageUrl;
}
