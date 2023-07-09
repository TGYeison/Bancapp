import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(credentials: any): Observable<any> {
    return this.http.post("http://localhost:3000/user/login", credentials);
  }

  register(newUser: any): Observable<any> {
    return this.http.post("http://localhost:3000/user/register", newUser);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken(): string {
    return this.cookies.get("token");
  }

  signOut () {
    this.cookies.delete("token");
  }
}
