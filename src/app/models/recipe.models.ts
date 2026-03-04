export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe extends CreateRecipe {
  id?: number;
}
export interface CreateRecipe {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
  imagePath?: string;
  servings: number;
}
