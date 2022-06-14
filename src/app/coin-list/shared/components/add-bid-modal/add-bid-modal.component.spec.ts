import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICoin } from '../../interfaces/coin.interface';

import { AddBidModalComponent } from './add-bid-modal.component';

describe('AddBidModalComponent', () => {
  let component: AddBidModalComponent;
  let fixture: ComponentFixture<AddBidModalComponent>;
  let data: ICoin = {} as ICoin;
  data.symbol = 'EHGFTY';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [AddBidModalComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: data }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
