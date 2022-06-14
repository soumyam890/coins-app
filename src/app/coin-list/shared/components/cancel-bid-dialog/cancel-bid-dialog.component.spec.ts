import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CancelBidDialogComponent } from './cancel-bid-dialog.component';
import { ICoin } from '../../interfaces/coin.interface';
import { isNgContainer } from '@angular/compiler';

describe('CancelBidDialogComponent', () => {
  let component: CancelBidDialogComponent;
  let fixture: ComponentFixture<CancelBidDialogComponent>;
  let data: ICoin = {} as ICoin;
  data.symbol = 'EHGFTY';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CancelBidDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue:  data }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelBidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
