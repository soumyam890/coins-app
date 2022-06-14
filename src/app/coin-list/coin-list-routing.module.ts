import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoinListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinListRoutingModule { }
