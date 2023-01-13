import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardCardComponent } from './flashcard-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FlashcardCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FlashcardCardComponent
  ],
})
export class FlashcardCardModule { }
