import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

baseURL: string = `https://swapi.dev/api`;
page: number = 1;
wookieTranslator: boolean = false;

constructor(private http: HttpClient) { }

// getSingleResource busca por algum tipo de informação
// utilizando um id e pode trazer a informação traduzida para wookieano
getSingleResource(path: string, id: number, wookie: boolean) {
  if (wookie) return this.http.get(`${this.baseURL}/${path}/${id}/?format=wookie`)
  return this.http.get(`${this.baseURL}/${path}/${id}`)
}

// getPluralResources busca os dados de algum tipo utilizando paramêtros de pesquisa
getPluralResources(path: string, params?: string) {
  if (params) return this.http.get(`${this.baseURL}/${path}/?search=${params}`)
  return this.http.get(`${this.baseURL}/${path}/`)
}

}
