import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';

@Component({
  selector: 'app-flashcard-card',
  templateUrl: './flashcard-card.component.html',
  styleUrls: ['./flashcard-card.component.scss']
})
export class FlashcardCardComponent  {

/*   @Input() flashcard?: Flashcard
 */  

   /*
  @Input() hasAction = true;

  @Output() callFav = new EventEmitter<Flashcard>();

  toggleStar(event: any): void
  {
    //event.stopPropagation();
    this.flashcard.star = !this.flashcard?.star;
    this.callFav.emit(this.flashcard);
  } */

  @Input() flashcard: Flashcard = {} as any;

  constructor() { }

  
}
