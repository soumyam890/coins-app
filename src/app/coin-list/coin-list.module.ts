import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListRoutingModule } from './coin-list-routing.module';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinListService } from './shared/coin-list.service';
import { AddBidModalComponent } from './shared/components/add-bid-modal/add-bid-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CancelBidDialogComponent } from './shared/components/cancel-bid-dialog/cancel-bid-dialog.component';

@NgModule({
  declarations: [CoinListComponent, 
    AddBidModalComponent, CancelBidDialogComponent],
  imports: [
    CommonModule,
    CoinListRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: [CoinListService],
  entryComponents: [AddBidModalComponent]
})
export class CoinListModule { }

