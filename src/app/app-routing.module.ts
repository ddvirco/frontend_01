import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBeerComponent } from './components/add-beer/add-beer.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';

const routes: Routes = [
    {path:'add-beer', component:AddBeerComponent},
    {path:'beer-list', component:BeerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
