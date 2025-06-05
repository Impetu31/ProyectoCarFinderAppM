import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" [routerLink]="['/tabs/tab1']">
          <ion-icon name="car"></ion-icon>
          <ion-label>Reportar</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" [routerLink]="['/tabs/tab2']">
          <ion-icon name="search"></ion-icon>
          <ion-label>Buscar</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" [routerLink]="['/tabs/tab3']">
          <ion-icon name="person"></ion-icon>
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class TabsPage {}
