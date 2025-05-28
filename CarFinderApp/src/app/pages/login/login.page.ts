  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { IonicModule, ToastController } from '@ionic/angular';
  import { AuthService } from 'src/app/services/auth.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule],
  })
  export class LoginPage {
    email: string = '';
    password: string = '';

    constructor(
      private authService: AuthService,
      private router: Router,
      private toastController: ToastController
    ) {}

    async presentToast(message: string, color: string = 'success') {
      const toast = await this.toastController.create({
        message,
        duration: 2000,
        color,
      });
      await toast.present();
    }

    async login() {
      if (!this.email || !this.password) {
        this.presentToast('Completa todos los campos', 'danger');
        return;
      }

      try {
        await this.authService.login(this.email, this.password);
        this.presentToast('Inicio de sesión exitoso');
        this.router.navigate(['/tabs/tab1']);
      } catch (error: any) {
        this.presentToast('Error: ' + error.message, 'danger');
      }
    }
  }
