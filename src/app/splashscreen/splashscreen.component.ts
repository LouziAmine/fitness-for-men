import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrl: './splashscreen.component.sass'
})
export class SplashscreenComponent {

  constructor(private router: Router) {}

  goToAboutPage() {
    this.router.navigate(['/home']);
  }

}
