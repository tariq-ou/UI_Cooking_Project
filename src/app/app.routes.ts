import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home';
import { RecipeListComponent } from './components/recipe-list/recipe-list';
import {RecipeNew} from './components/recipe-new/recipe-new';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // root path
  { path: 'recipes', component: RecipeListComponent },
  { path: 'add-recipe', component: RecipeNew },
];
