import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticathionService } from './autenticathion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authService:AutenticathionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser = this.authService.authUser;

    if(currentUser && currentUser)
    {
      req = req.clone({
        setHeaders:{
          auth : 'Bearer ${CurrentUser}'
        }
      })
    }
    return next.handle(req);

  }

}
