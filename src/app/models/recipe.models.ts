export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  steps: string[];
  imageLoc?: string;
  servings: number; // optional if not always present
}
