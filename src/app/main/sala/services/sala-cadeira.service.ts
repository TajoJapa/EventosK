import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from "rxjs";
import data from 'src/data/cadeira'


@Injectable({
    providedIn: 'root'
})
export class SalaCadeiraService{

    constructor(
        // protected _http: HttpClient,
    ) {}

    find(filtro?: any): Observable<any> {
        // const url = `${environment.server}/config/avaliacao-fisica`
        // return this._http.get<Response<Array<AvaliacaoFisica>>>(url, {params: params})
        return of(data)
    }
}
