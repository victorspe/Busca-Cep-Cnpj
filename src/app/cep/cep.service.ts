import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable() 
export class CepService {

    constructor(private http: HttpClient){}

    consultaCEP(cep: string){
        if(cep !== ''){
            const validaCEP = /^[0-9]{8}$/;
            if(validaCEP.test(cep)){
                return this.http.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
            }  
        }
        return of({});
    }
}