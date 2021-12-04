import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthnticated = false;

  constructor() {}

  login() {
    this.isAuthnticated = true;
  }

  logout() {
    this.isAuthnticated = false;
  }
}
