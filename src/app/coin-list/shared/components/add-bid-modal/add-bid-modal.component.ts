import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICoin } from '../../interfaces/coin.interface';

@Component({
  selector: 'app-add-bid-modal',
  templateUrl: './add-bid-modal.component.html',
  styleUrls: ['./add-bid-modal.component.scss']
})
export class AddBidModalComponent implements OnInit {
  public coinData: ICoin;
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddBidModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ICoin
  ) {
    this.coinData = this.data;
  }

  ngOnInit(): void {
    this.createForm();
  }

  public onSubmit(value) {
    this.dialogRef.close(true);
  }

  public close(){
    this.dialogRef.close(false);
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      'qty': [null, Validators.required],
      'priceForBuy': [null, Validators.required],
      'priceForSell': [null, Validators.required],
    });
  }

}
