import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { professional } from '../model/professional.model';
import { AutenticathionService } from './autenticathion.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  URL = 'http://localhost:8090';
  authUser: boolean = false;

  constructor(private http: HttpClient, private auth: AutenticathionService) { }

  getData(): Observable<professional> {
    return this.http.get<professional>(this.URL + '/portfolio');
  }

  editData(professional: professional): Observable<any> {
    const endpointUrl = this.URL + '/portfolio/update';
    return this.http.put(endpointUrl, professional)
}

}
