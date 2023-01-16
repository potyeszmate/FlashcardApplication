import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';
import { FbCrudService } from 'src/service/fb-crud.service';
import { GuessService } from 'src/service/guesses.service';

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

  }

  correctGuesses$: Observable<number>;
  incorrectGuesses$: Observable<number>;


  constructor( private service: FbCrudService, private guessService: GuessService) {
    this.correctGuesses$ = this.guessService.correctValue$;
    this.incorrectGuesses$ = this.guessService.incorrectValue$;

   }

  flashcardlist: Observable<Flashcard[]> | null = null;
  flashcard: Observable<Flashcard> | null = null;

  //category? = '';



  ngOnInit(): void {
    //this.category = '';
    this.getFlashcards();
  }

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
 
  items = 0;

  itemCount(){
    this.items++;
  }


  
}
