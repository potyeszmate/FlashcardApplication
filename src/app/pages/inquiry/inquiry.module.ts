import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryComponent } from './inquiry.component';
import { InquiryRoutingModule } from './inquiry-routing.module';



@NgModule({
  declarations: [
    InquiryComponent
  ],
  imports: [
    CommonModule,
    InquiryRoutingModule
  ],
  exports: [InquiryComponent]
})
export class InquiryModule { }
