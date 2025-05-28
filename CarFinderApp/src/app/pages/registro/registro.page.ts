import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { provideAuth, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async register() {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      this.showToast('Por favor completa todos los campos.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showToast('Las contraseñas no coinciden.');
      return;
    }

    try {
      await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      this.showToast('Registro exitoso');
      this.router.navigate(['/login']);
    } catch (error: any) {
      this.showToast(error.message || 'Error al registrar usuario');
    }
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top'
    });
    await toast.present();
  }
}
