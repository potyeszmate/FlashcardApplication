import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteCardComponent } from './favorite-card.component';


const routes: Routes = [
  {
    path: '', 
    component: FavoriteCardComponent,
    data: { title: 'Cards to learn page'}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteCArdRoutingModule { }