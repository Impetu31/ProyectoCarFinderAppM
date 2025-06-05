import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.authService.isLoggedIn();

    if (!isAuthenticated) {
      const toast = await this.toastController.create({
        message: 'Debes iniciar sesión para acceder.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
