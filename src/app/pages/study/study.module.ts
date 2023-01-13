import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyComponent } from './study.component';
import { StudyRoutingModule } from './study-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlashcardCardModule } from '../admin/flashcard-card/flashcard-card.module';

import { ReactiveFormsModule } from '@angular/forms';
import { CategoryModule } from '../category/category.module';



@NgModule({
  declarations: [StudyComponent],
  imports: [
    CommonModule,
    StudyRoutingModule,
    MatIconModule,
    FlashcardCardModule,
    MatCardModule,
    ReactiveFormsModule,
    CategoryModule    
  ],
  exports: [StudyComponent]
})
export class StudyModule { }
