import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICoin } from '../../interfaces/coin.interface';

@Component({
  selector: 'app-cancel-bid-dialog',
  templateUrl: './cancel-bid-dialog.component.html',
  styleUrls: ['./cancel-bid-dialog.component.scss']
})
export class CancelBidDialogComponent implements OnInit {
  public coinData: ICoin;

  constructor(private dialogRef: MatDialogRef<CancelBidDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ICoin
  ) {
    this.coinData = this.data;
  }

  ngOnInit(): void {
  }

  public confirm() {
    this.dialogRef.close(true);
  }

  public close() {
    this.dialogRef.close(false);
  }

}
