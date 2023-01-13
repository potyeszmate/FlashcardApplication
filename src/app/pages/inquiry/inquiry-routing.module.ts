import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquiryComponent } from './inquiry.component';


const routes: Routes = [
  {
    path: '', 
    component: InquiryComponent,
    data: { title: 'Inquiry page'}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiryRoutingModule { }