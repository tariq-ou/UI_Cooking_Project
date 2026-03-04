import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IngredientForm } from '../form/ingredient-form/ingredient-form';
import { StepsForm } from '../form/step-form/step-form';
import {CreateRecipe, Recipe} from '../../models/recipe.models';
import { CookingApi } from '../../services/CookingApi/cookingapi'; // your implementation
import { IRecipeService } from '../../services/interface/recipe.service.interface';

@Component({
  standalone: true,
  selector: 'app-recipe-new',
  imports: [FormsModule, IngredientForm, StepsForm],
  templateUrl: './recipe-new.html',
  styleUrl: './recipe-new.css',
})
export class RecipeNew implements OnInit {

  private recipeService: IRecipeService;
  private route = inject(ActivatedRoute);

  constructor(private api: CookingApi) {
    this.recipeService = api; // if you want to work through the interface
  }

  recipe: CreateRecipe = {
    name: '',
    servings: 1,
    ingredients: [],
    steps: [],
    imagePath: ''
  };

  editingId: number | null = null;


  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) return;

    this.editingId = parseInt(idParam, 10);

    this.recipeService.getRecipeById(this.editingId)
      .subscribe(recipe => {
        this.recipe = recipe;
      });
}
  // ⭐ Runs when page loads
  // ngOnInit() {
  //   const idParam = this.route.snapshot.paramMap.get('id');
  //
  //   if (!idParam) return; // add mode → keep blank form
  //
  //   const id = parseInt(idParam, 10);
  //
  //   // // TEMP: mock data (later this comes from RecipeService)
  //   // if (id === 1) {
  //   //   this.recipe = {
  //   //     id: 1,
  //   //     name: 'Spaghetti',
  //   //     servings: 2,
  //   //     ingredients: [
  //   //       { name: 'pasta', amount: 90, unit: 'grams' },
  //   //       { name: 'tomato', amount: 400, unit: 'ml' }
  //   //     ],
  //   //     steps: ['Boil water', 'Cook pasta'],
  //   //     imagePath: 'assets/recipeImage/SpagBol.jpg'
  //   //   };
  //   // }
  //   //
  //   // if (id === 2) {
  //   //   this.recipe = {
  //   //     id: 2,
  //   //     name: 'Tacos',
  //   //     servings: 2,
  //   //     ingredients: [],
  //   //     steps: ['Cook meat', 'Assemble'],
  //   //     imagePath: 'assets/recipeImage/Tacos.jpg'
  //   //   };
  //   //}
  // }

  // onImageSelected(event: Event) {
  //   const fileInput = event.target as HTMLInputElement;
  //   const file = fileInput.files?.[0];
  //
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.recipe.imagePath = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  selectedFile: File | null = null;

  previewUrl: string | null = null;

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    this.selectedFile = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
  }
  onSubmit() {

    // //mabye change logic to differenate better
    // if (this.recipe.id === undefined) {
    //
    //   this.recipeService.createRecipe(this.recipe).subscribe({
    //     next: () => {
    //       // navigate away or show confirmation
    //       // add logic to show message confirming
    //       alert('Recipe Created! (simulated)');
    //
    //     },
    //     error: err => console.error('Error saving recipe:', err)
    //   })
    //
    // } else {
    //
    //   console.log('UPDATE recipe', this.recipe);
    //
    //   this.recipeService.createRecipe(this.recipe).subscribe({
    //     next: () => {
    //       // navigate away or show confirmation
    //       // add logic to show message confirming
    //       alert('Recipe Updated! (simulated)');
    //
    //     },
    //     error: err => console.error('Error saving recipe:', err)
    //   })

    if (this.editingId === null) {

      this.recipeService.createRecipe(this.recipe)
        .subscribe(() => alert('Created'));

    } else {

      this.recipeService.updateRecipe(this.editingId, this.recipe)
        .subscribe(() => alert('Updated'));
    }
    }





}
