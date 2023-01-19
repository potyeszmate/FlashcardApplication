import { Component } from '@angular/core';
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
export class InquiryComponent {
  categories: Category[] = [
    {value: 'Human', categoryName: 'Human'},
    {value: 'Work', categoryName: 'Work'},
    {value: 'Study', categoryName: 'Study'},
    {value: 'Hobby', categoryName: 'Hobby'},
    {value: 'Sport', categoryName: 'Sport'},
    {value: 'Food', categoryName: 'Food'},
    {value: 'Politics', categoryName: 'Politics'},


  ];

  
  selectedCategory: string ='Nothing';

  changeCategory(value:string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);

    this.guessService.refreshValues();

    this.flashcardlist = this.service.get("flashcards");
    this.flashcardlist.subscribe(data => {
      let count = 0;
      let tempArray: Flashcard[] = []
      for(let flashcard of data) {
          if(flashcard.category === this.selectedCategory) {
              tempArray.push(flashcard);
              count++;
              console.log(count);

              if(count === 10) {
                  break;
              }
          }
      }
      this.filteredAndSlicedList = tempArray.length > 0 ? of(tempArray) : null;
      //console.log(tempArray.length);

    });

  }

  correctGuesses$: Observable<number>;
  incorrectGuesses$: Observable<number>;


  constructor( private service: FbCrudService, private guessService: GuessService) {
    this.correctGuesses$ = this.guessService.correctValue$;
    this.incorrectGuesses$ = this.guessService.incorrectValue$;

   }



  flashcardlist: Observable<Flashcard[]> | null = null;
  filteredAndSlicedList: Observable<Flashcard[]> | null = null;


  flashcard: Observable<Flashcard> | null = null;

  //category? = '';



  ngOnInit(): void {
    //this.category = '';
    this.getFlashcards();
    
    }
    //filtering
    

    /* this.flashcardlist.pipe(
        filter(flashcard => flashcard.category === this.selectedCategory),
        take(10)
    ).subscribe(data => this.filteredAndSlicedList = data);
    } */

    //this.flashcardlist = this.service.get("flashcards");



  
    

  getFlashcards() :void{
    this.flashcardlist = this.service.get('flashcards');
  }

  selectedCard: number = 0

  onCardClick(id: number): void{
    console.log(this.selectedCard);
    let nextIndex = id + 1;
      
    this.selectedCard = id + 1;

    /* if (this.selectedCard >= this.flashcard!.length) {
        this.selectedCard = 0;
    } */

    //this.selectedCard = 0;     
  } 

  buttonPressed: boolean = false;
 
  isItem: boolean = false;

  itemCount(){
    this.isItem = true;
    //console.log(this.items);
  }

  
}
