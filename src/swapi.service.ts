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

// getAllPLanets lista todos os planetas do universo
getAllPlanets() {
  let requestURL = `${this.baseURL}/planets/`
  console.log(requestURL);
  return this.http.get(requestURL)
}

}
