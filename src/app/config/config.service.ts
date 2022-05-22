import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}
  charactersURL = 'https://rickandmortyapi.com/api/character';
  getCharacters() {
    return this.http.get<Characters>(this.charactersURL);
  }
}
export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
}
export interface Characters {
  info: {
    count: number;
  };
  results: Character[];
}
