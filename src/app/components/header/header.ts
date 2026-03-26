import {ChangeDetectorRef, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CookingApi} from '../../services/CookingApi/cookingapi';


@Component({
  standalone: true,
  selector: 'app-header',
  imports: [ RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private recipeService: CookingApi,
              private cdr: ChangeDetectorRef) {

  }
  imageLogoLoc = 'assets/icon/spirit.webp';

  exportRecipes() {
    const confirmExport = window.confirm(
      'Export recipes to JSON file?'
    );

    if (!confirmExport) return;

    this.recipeService.exportRecipes().subscribe({
      next: () => {
        alert('Recipes exported successfully');
      },
      error: err => {
        console.error(err);
        alert('Export failed');
      }
    });
  }

  importRecipes() {
    const confirmImport = window.confirm(
      'This will overwrite your current recipes. Continue?'
    );

    if (!confirmImport) return;

    this.recipeService.importRecipes().subscribe({
      next: () => {
        alert('Recipes imported successfully');

        // 🔥 THIS LINE
        window.location.reload();
      },
      error: err => {
        console.error(err);
        alert('Import failed');
      }
    });
  }
}
