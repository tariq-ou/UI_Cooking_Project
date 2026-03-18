// recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CreateRecipe, Recipe} from '../../models/recipe.models';
import { Observable } from 'rxjs';
import { IRecipeService } from '../interface/recipe.service.interface';


@Injectable({
  providedIn: 'root'
})
export class CookingApi implements IRecipeService {
  private apiUrl = 'http://localhost:5000/api/v1/recipe';

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/GetRecipes`);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}/recipeid`);
  }

  createRecipe(recipe: CreateRecipe, imageFile?: File): Observable<Recipe> {

    const formData = new FormData();

    formData.append('Name', recipe.name);
    formData.append('Servings', recipe.servings.toString());

    recipe.ingredients.forEach((ingredient, index) => {
      formData.append(`Ingredients[${index}].Name`, ingredient.name);
      formData.append(`Ingredients[${index}].Amount`, ingredient.amount.toString());
      formData.append(`Ingredients[${index}].Unit`, ingredient.unit);
    });

    recipe.steps.forEach((step, index) => {
      formData.append(`Steps[${index}]`, step);
    });

    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    return this.http.post<Recipe>(
      `${this.apiUrl}/addrecipe`,
      formData
    );
  }

  updateRecipe(id: number, recipe: CreateRecipe, imageFile?: File): Observable<Recipe> {

    const formData = new FormData();

    formData.append('Name', recipe.name);
    formData.append('Servings', recipe.servings.toString());
    if (recipe.imagePath !== undefined) {
      formData.append('imagePath', recipe.imagePath?.toString());
    }

    recipe.ingredients.forEach((ingredient, index) => {
      formData.append(`Ingredients[${index}].Name`, ingredient.name);
      formData.append(`Ingredients[${index}].Amount`, ingredient.amount.toString());
      formData.append(`Ingredients[${index}].Unit`, ingredient.unit);
    });

    recipe.steps.forEach((step, index) => {
      formData.append(`Steps[${index}]`, step);
    });

    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    return this.http.put<Recipe>(
      `${this.apiUrl}/${id}/updaterecipe`,
      formData
    );
  }

  deleteRecipe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/deleteid`);
  }

  GetAllIngredientsRecipe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
