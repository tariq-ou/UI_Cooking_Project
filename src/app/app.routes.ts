import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home';
import { RecipeListComponent } from './components/recipe-list/recipe-list';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // root path
  { path: 'recipes', component: RecipeListComponent },
];
