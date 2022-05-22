import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}
  quotesUrl = 'https://programming-quotes-api.herokuapp.com/quotes/random';
  getRandom() {
    return this.http.get<Quote>(this.quotesUrl);
  }
}
export interface Quote {
  id: string;
  author: string;
  en: string;
}
