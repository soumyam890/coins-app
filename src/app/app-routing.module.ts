import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponentComponent } from './default-component/default-component.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'coin-list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponentComponent,
    children: [
      {
        path: 'coin-list',
        loadChildren: () => import('./coin-list/coin-list.module').then(m => m.CoinListModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
