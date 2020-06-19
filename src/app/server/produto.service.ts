import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from  'rxjs/operators';
import { Produto } from '../models/produto';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { MessageService } from './message.service'

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    private usersUrl = 'http://localhost:3000';

    /*testando: Teste = {
        "nome": "ola"
    };*/
    //private profileObs$: BehaviorSubject<Teste> = new BehaviorSubject(this.testando);
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
    };
    constructor(private http: HttpClient, private messageService: MessageService) { }
    /*
        getProfileObs(): Observable<Teste> {
            return this.profileObs$.asObservable();
        }
    
        setProfileObs(profile: Teste) {
            this.profileObs$.next(profile);
        }
    */
    getProdutos(): Observable<Produto[]> {
        let a = this.http.get<Produto[]>(this.usersUrl + '/Produtos');
        console.log(a)
        return a
    }

    setProduto(produto: any): Observable<any> {

        return this.http.post<any>(this.usersUrl + "/Produtos", produto, {
            reportProgress: true,
            observe: 'events'
        }).pipe(map((event) => {

            switch (event.type) {

                case HttpEventType.UploadProgress:
                    const progress = Math.round(100 * event.loaded / event.total);
                    return { status: 'progress', message: progress };

                case HttpEventType.Response:
                    return event.body;
                default:
                    return 'Unhandled event: ${event.type}';
            }
        }));

    }


}