import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CoinListService } from '../shared/coin-list.service';
import { finalize } from 'rxjs/operators';
import { ICoin } from '../shared/interfaces/coin.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddBidModalComponent } from '../shared/components/add-bid-modal/add-bid-modal.component';
import { CancelBidDialogComponent } from '../shared/components/cancel-bid-dialog/cancel-bid-dialog.component';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinListComponent implements OnInit {

  public displayedColumns: string[] = ['symbol', 'percentage', 'lastPrice', 'volume', 'action'];
  public dataSource = new MatTableDataSource<ICoin>([]);
  public isLoading = true;
  public isError: boolean;
  public value: string;
  public filteredData: ICoin[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private coinListService: CoinListService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getData();
  }

  public filter(): void {
    if (this.value) {
      const filterValue = this.value.toLowerCase();
      const filterData = this.filteredData.filter(
        (option) => option.symbol.toLowerCase().indexOf(filterValue) === 0
      );

      this.dataSource.data = filterData;
    } else {
      this.dataSource.data = this.filteredData;
    }

    this.dataSource.paginator = this.paginator;
  }

  public placeBid(coin) {
    const dialogRef = this.dialog.open(AddBidModalComponent,
      {
        width: '50%',
        maxWidth: '90%',
        data: coin,
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filteredData.find(el => {
          if (el == coin) {
            el.isBided = true;
          }
        });
        this.filter();
      }
    });
  }

  public cancelBid(coin) {
    const dialogRef = this.dialog.open(CancelBidDialogComponent,
      {
        width: '25%',
        data: coin,
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filteredData.find(el => {
          if (el == coin) {
            el.isBided = false;
          }
        });
        this.filter();
      }
    });
  }

  private getData(): void {
    this.coinListService.getCoinList().pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.filteredData = res;
          this.dataSource.data = res;
          this.dataSource.paginator = this.paginator;
        },
        (_error) => {
          this.isError = true;
        }
      );
  }
}

