import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { CoinListComponent } from './coin-list.component';

describe('CoinListComponent', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinListComponent ],
      imports: [HttpClientModule, MatDialogModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
