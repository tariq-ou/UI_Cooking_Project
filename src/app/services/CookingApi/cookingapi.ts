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

    formData.append('name', recipe.name);
    formData.append('servings', recipe.servings.toString());

    formData.append('ingredients', JSON.stringify(recipe.ingredients));
    formData.append('steps', JSON.stringify(recipe.steps));

    if (imageFile) {
      formData.append('image', imageFile);
    }

    return this.http.post<Recipe>(`${this.apiUrl}/addrecipe`, formData);
  }

  updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/${id}`, recipe);
  }

  deleteRecipe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  GetAllIngredientsRecipe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
