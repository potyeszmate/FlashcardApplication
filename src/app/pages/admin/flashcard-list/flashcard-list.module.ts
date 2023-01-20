import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardListComponent } from './flashcard-list.component';
import { MatIconModule } from '@angular/material/icon';
import { FlashcardRoutingModule } from './flashcard-list-routing.module';
import { FlashcardAddModule } from '../flashcard-add/flashcard-add.module';
import { FlashcardCardModule } from '../flashcard-card/flashcard-card.module';
import { MatCardModule } from '@angular/material/card';
import { FlashcardUpdateModule } from '../flashcard-update/flashcard-update.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashcardDeleteModule } from '../flashcard-delete/flashcard-delete.module';



@NgModule({
  declarations: [
    FlashcardListComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatIconModule,
    FlashcardRoutingModule,
    FlashcardAddModule,
    FlashcardCardModule,
    MatCardModule,
    FlashcardUpdateModule,
    ReactiveFormsModule,
    FlashcardDeleteModule
    
  ],
  exports: [
    FlashcardListComponent
  ]
})
export class FlashcardListModule { }
