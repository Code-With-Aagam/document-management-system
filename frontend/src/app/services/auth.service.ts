
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.API}/login`, { email, password });
  }

  register(name: string, email: string, password: string) {
    return this.http.post<any>(`${this.API}/register`, { name, email, password });
  }

  saveUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getToken(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).token : null;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
