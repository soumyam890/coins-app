import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CoinListService } from './coin-list.service';

describe('CoinListService', () => {
  let service: CoinListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [CoinListService]
    });
    service = TestBed.inject(CoinListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getCoinList function', () => {
    const service: CoinListService = TestBed.get(CoinListService);
    expect(service.getCoinList).toBeTruthy();
   });
});
