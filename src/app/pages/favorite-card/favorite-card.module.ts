import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteCardComponent } from './favorite-card.component';
import { FavoriteCArdRoutingModule } from './favorite-card-routing.module';
import { FlashcardCardModule } from '../admin/flashcard-card/flashcard-card.module';



@NgModule({
  declarations: [
    FavoriteCardComponent
  ],
  imports: [
    CommonModule,
    FavoriteCArdRoutingModule,
    FlashcardCardModule
  ],
  exports: [
    FavoriteCardComponent
  ],
})
export class FavoriteCardModule { }
