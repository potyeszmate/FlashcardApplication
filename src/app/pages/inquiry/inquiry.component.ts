import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';
import { FbCrudService } from 'src/service/fb-crud.service';
import { GuessService } from 'src/service/guesses.service';

import { filter, take } from 'rxjs/operators';


interface Category {
  value: string;
  categoryName: string;
}

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {

  //initialize guesses
  correctGuesses$: Observable<number>;
  incorrectGuesses$: Observable<number>;
  //initialize flashcards/filteredflashcards
  flashcardlist: Observable<Flashcard[]> | null = null;
  filteredAndSlicedList: Observable<Flashcard[]> | null = null;
  flashcard: Observable<Flashcard> | null = null;

  selectedCard: number = 0
  //buttonPressed: boolean = false;
  isItem: boolean = false;
  selectedCategory: string = 'Nothing';


  constructor(private service: FbCrudService, private guessService: GuessService) {
    this.correctGuesses$ = this.guessService.correctValue$;
    this.incorrectGuesses$ = this.guessService.incorrectValue$;

  }

  //The category array for selecting the caregory (this is an other way, value is that will be selected, categoryName is the printed)
  categories: Category[] = [
    { value: 'Human', categoryName: 'Human' },
    { value: 'Work', categoryName: 'Work' },
    { value: 'Study', categoryName: 'Study' },
    { value: 'Hobby', categoryName: 'Hobby' },
    { value: 'Sport', categoryName: 'Sport' },
    { value: 'Food', categoryName: 'Food' },
    { value: 'Politics', categoryName: 'Politics' },

  ];

  ngOnInit(): void {
    this.getFlashcards();

  }

  getFlashcards(): void {
    this.flashcardlist = this.service.get('flashcards');
  }

  //Push the items with the selected category to a temporary array but only the first possible 10 item
  changeCategory(value: string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);

    this.guessService.refreshValues();

    this.flashcardlist = this.service.get("flashcards");
    this.flashcardlist.subscribe(data => {
      let count = 0;
      let tempArray: Flashcard[] = []
      for (let flashcard of data) {
        if (flashcard.category === this.selectedCategory) {
          tempArray.push(flashcard);
          count++;
          console.log(count);

          if (count === 10) {
            break;
          }
        }
      }

      //Convert the array to Observable<Flashcard[]>
      this.filteredAndSlicedList = tempArray.length > 0 ? of(tempArray) : null;

    });

  }



  //Itemcount that sets the item to true to show the Correct/incorrect bucket
  itemCount() {
    this.isItem = true;
  }

}
