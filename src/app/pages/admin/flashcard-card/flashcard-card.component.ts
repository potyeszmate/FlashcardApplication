import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';

@Component({
  selector: 'app-flashcard-card',
  templateUrl: './flashcard-card.component.html',
  styleUrls: ['./flashcard-card.component.scss']
})
export class FlashcardCardComponent implements OnInit {

  @Input() flashcard?: Flashcard
  constructor() { }

  ngOnInit(): void {
  }
  
}
