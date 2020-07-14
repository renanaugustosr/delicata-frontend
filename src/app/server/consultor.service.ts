import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Consultor } from 'app/models/consultor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultorService {

  private userUrl = 'https://delicata-backend.herokuapp.com';

  constructor(private http: HttpClient) { }

  getConsultores(): Observable<Consultor[]> {
    let a = this.http.get<Consultor[]>(this.userUrl + '/consultores');
    return a;
  }

  setConsultor(consultor: any): Observable<any> {
    return this.http.post<any>(this.userUrl + "/consultores", consultor, {
      reportProgress: true
    });
  }
}
