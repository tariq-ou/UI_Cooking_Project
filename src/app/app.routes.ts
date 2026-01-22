import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home';
import { RecipeListComponent } from './components/recipe-list/recipe-list';
import {RecipeNew} from './components/recipe-new/recipe-new';
import {RecipeDetail} from './components/recipe-detail/recipe-detail';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // root path
  { path: 'recipes', component: RecipeListComponent },
  { path: 'add-recipe', component: RecipeNew },
  {path: 'recipes/:id', component: RecipeDetail,}
];
