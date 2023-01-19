import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';
import { FbCrudService } from 'src/service/fb-crud.service';

interface Category {
  value: string;
  categoryName: string;
}


@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})

export class StudyComponent {
  categories: Category[] = [
    {value: 'Human', categoryName: 'Human'},
    {value: 'Work', categoryName: 'Work'},
    {value: 'Study', categoryName: 'Study'},
    {value: 'Hobby', categoryName: 'Hobby'},
    {value: 'Sport', categoryName: 'Sport'},
    {value: 'Food', categoryName: 'Food'},
    {value: 'Politics', categoryName: 'Politics'},


  ];

  filteredAndSlicedList: Observable<Flashcard[]> | null = null;

  selectedCategory: string ='Nothing';

  arrayLength: number = 0

  changeCategory(value:string) {
    this.selectedCard = 0;
    this.isLastItem = false;

    this.selectedCategory = value;
    console.log(this.selectedCategory);

    
    this.flashcardlist = this.service.get("flashcards");
    this.flashcardlist.subscribe(data => {
      let count = 0;
      let tempArray: Flashcard[] = []
      for(let flashcard of data) {
          if(flashcard.category === this.selectedCategory) {
              tempArray.push(flashcard);
              count++;
              //console.log(count);
          }
      }

      this.arrayLength = tempArray.length - 1;

      console.log(this.arrayLength);

      this.filteredAndSlicedList = tempArray.length > 0 ? of(tempArray) : null;
      //console.log(tempArray.length);

    });


  }

  ///

  constructor( private service: FbCrudService) {
    this.service.get("flashcards").subscribe(items => {
      this.items = items;
      this.filteredItems = items;
    });

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
  isLastItem: boolean = false;

  onCardClick(id: number): void{
    console.log(this.selectedCard);
    this.selectedCard = id + 1;

    if(this.selectedCard >= this.arrayLength){
      this.isLastItem = true;
    }
    console.log(this.isLastItem);

    //this.selectedCard = id + 1;

    /* if (this.selectedCard >= this.flashcard!.length) {
        this.selectedCard = 0;
    } */

    //this.selectedCard = 0;     
    
  } 

  /* cardSelected(id: number){
    this.selectedCard = id + 1;
    console.log(this.selectedCard);
  } */

  setToZero() 
  {
    this.selectedCard = 0;
    console.log("Teszt");
  }

  items: any[] = [];
  filteredItems: any[] = [];

  //filer based on categories

  filterItems(category: string) {
    this.filteredItems = this.items.filter(item => item.category === category);
  }


  favorites: Flashcard[] = [];


  onFavorite(event: Flashcard): void{

    console.log(event);

    if(event?.star){
      this.favorites.push(event);
    }
    this.favorites = this.favorites.filter(item => item.star)
  }

/* 
  isLast = false;

  onButtonClick(){
    if(this.isLast) {
      
      this.isLast = false;
    }
  } */


}
