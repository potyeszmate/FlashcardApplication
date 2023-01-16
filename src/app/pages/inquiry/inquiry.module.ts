import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryComponent } from './inquiry.component';
import { InquiryRoutingModule } from './inquiry-routing.module';
import { InquiryCardModule } from './inquiry-card/inquiry-card.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    InquiryComponent
  ],
  imports: [
    CommonModule,
    InquiryRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    InquiryCardModule
  ],
  exports: [InquiryComponent]
})
export class InquiryModule { }
