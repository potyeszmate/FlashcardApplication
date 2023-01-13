
import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { FlashcardListComponent } from './flashcard-list.component';


const routes: Routes = [
  {
    path: '', 
    component: FlashcardListComponent,
    data: { title: 'Flashcard Page '}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashcardRoutingModule { }