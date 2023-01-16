import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';
import { GuessService } from 'src/service/guesses.service';

@Component({
  selector: 'app-inquiry-card',
  templateUrl: './inquiry-card.component.html',
  styleUrls: ['./inquiry-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class InquiryCardComponent implements OnInit {

  @Input() flashcard?: Flashcard

  constructor(private guessService: GuessService ) { }

  ngOnInit(): void {
  }

  flip: string = 'inactive';
  isFlipped: boolean = false;
  areButtonsVisible = true;


  correctGuesses = 0;
  incorrectGuesses = 0;

  toggleFlip() {
    if(!this.isFlipped){
      this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
    this.isFlipped = true;
  }

/*   correctGuess(){
    this.correctGuesses++;
    console.log(this.correctGuesses);
  }

  incorrectGuess(){
    this.incorrectGuesses++;
    console.log(this.incorrectGuesses);
  }
 */

  correctValue() {
    this.guessService.increaseCorrectValue();
  }

  incorrectValue() {
    this.guessService.increaseIncorrectValue();
  }
}


