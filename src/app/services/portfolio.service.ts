import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { professional } from '../model/professional.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  URL = 'http://localhost:8090';

  constructor(private http:HttpClient) { }

  getData():Observable<professional>{
   return this.http.get<professional>(this.URL+'/portfolio');
  }

}
