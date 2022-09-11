import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticathionService {
  url = 'http://localhost:8090/auth/login';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('user') || '{}'));
  }

  login(credentials: any): Observable<Boolean> {
    return this.http.post<Boolean>(this.url, credentials).pipe(map(data => {
      sessionStorage.setItem('user', JSON.stringify(data));
      this.currentUserSubject.next(data);
      window.location.reload();
      return data;
    }))
  }

  public logout() {
    sessionStorage.removeItem("user");
  }

  public get authUser() {
    return this.currentUserSubject;
  }

  public authenticated(): boolean {
    return sessionStorage.getItem("user") !== null;
  }

}