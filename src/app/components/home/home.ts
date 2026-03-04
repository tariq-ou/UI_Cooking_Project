import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    RouterLink
    // RouterLinkActive
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

}
