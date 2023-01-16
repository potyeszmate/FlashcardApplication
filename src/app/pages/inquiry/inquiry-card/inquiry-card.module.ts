import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryCardComponent } from './inquiry-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    InquiryCardComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    InquiryCardComponent
  ],
})
export class InquiryCardModule { }
