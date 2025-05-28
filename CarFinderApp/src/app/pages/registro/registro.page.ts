import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class RegistroPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private auth: Auth,
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
      await createUserWithEmailAndPassword(this.auth, this.email, this.password);
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
