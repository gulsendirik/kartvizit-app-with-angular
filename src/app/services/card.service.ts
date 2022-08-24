import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  //apiUrl: string = 'http://demo.limantech.com/cards/public/api';

  constructor(
    @Inject('apiUrl') private url: string,
    private http: HttpClient
  ) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url + '/cards');
  }

  addCard(card: Card): Observable<any> {
    return this.http.post(this.url + '/cards', card);
  }

  updateCard(card: Card, cardId: number): Observable<any> {
    return this.http.put(this.url + '/cards/' + cardId, card);
  }
}
