import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyComponent } from './study.component';


const routes: Routes = [
  {
    path: '', 
    component: StudyComponent,
    data: { title: 'Study Page'}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule { }