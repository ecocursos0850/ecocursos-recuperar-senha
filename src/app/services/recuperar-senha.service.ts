import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaService {

  constructor(private http: HttpClient) { }

  public recuperarSenha(any: any) : Observable<void> {
    return this.http.post<void>("https://srv448021.hstgr.cloud:3000/aluno/recuperar", any); //port 8443 prd
  }

}
