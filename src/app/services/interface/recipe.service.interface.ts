// recipe.service.interface.ts
import { Recipe } from '../../models/recipe.models';
import { Observable } from 'rxjs';

export interface IRecipeService {
  getAllRecipes(): Observable<Recipe[]>;
  getRecipeById(id: number): Observable<Recipe>;
  createRecipe(recipe: Recipe): Observable<Recipe>;
  updateRecipe(id: number, recipe: Recipe): Observable<Recipe>;
  deleteRecipe(id: number): Observable<void>;
}
