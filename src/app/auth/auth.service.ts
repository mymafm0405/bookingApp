import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthnticated = false;

  constructor(private loadingCtrl: LoadingController, private router: Router) {}

  login() {
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Loading...',
      })
      .then((loadEl) => {
        loadEl.present();
      });
    setTimeout(() => {
      this.loadingCtrl.dismiss();
      this.isAuthnticated = true;
      this.router.navigate(['places/discover']);
    }, 1500);
  }

  logout() {
    this.isAuthnticated = false;
  }
}
