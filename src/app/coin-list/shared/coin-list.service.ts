
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICoin } from './interfaces/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinListService {

  constructor(private httpClient: HttpClient) { }

  public getCoinList(): Observable<ICoin[]> {
    return this.httpClient.get<ICoin[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
