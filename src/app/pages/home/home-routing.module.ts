
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {path: '', redirectTo: 'category', pathMatch: 'full'},
  {
    path: '', 
    component: HomeComponent,
    children: 
    [
      {
        path: 'category', 
        loadChildren: () => import('./../category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'study', 
        loadChildren: () => import('./../study/study.module').then(m => m.StudyModule)
      },
      {
        path: 'inquiry', 
        loadChildren: () => import('./../inquiry/inquiry.module').then(m => m.InquiryModule)
      },
      {
        path: 'flashcardlist', 
        loadChildren: () => import('./../admin/flashcard-list/flashcard-list.module').then(m => m.FlashcardListModule)
        
    },
                     
    ],
    canActivateChild: [AuthGuard]

  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }