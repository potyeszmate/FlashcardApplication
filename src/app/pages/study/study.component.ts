import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FbCrudService } from 'src/app/service/fb-crud.service';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';

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

  
  constructor(private service: FbCrudService) {
    this.service.get("flashcards").subscribe(items => {
      //For filter (not using right now)
      this.items = items;
      this.filteredItems = items;
    });

  }

  // flashcard Observables (array, flashcard, convertedList)
  filteredAndSlicedList: Observable<Flashcard[]> | null = null;
  flashcardlist: Observable<Flashcard[]> | null = null;
  flashcard: Observable<Flashcard> | null = null;

  //selected category
  selectedCategory: string = 'Nothing';
  //array length for last item
  arrayLength: number = 0
  //card index
  selectedCard: number = 0
  //last element or not
  isLastItem: boolean = false;

  //For filter (not using right now)
  items: any[] = [];
  filteredItems: any[] = [];

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

  //When changing a category: we save the items with the selected category to a temporary array (limited size: 10)
  changeCategory(value: string) {
    this.selectedCard = 0;
    this.isLastItem = false;

    this.selectedCategory = value;
    console.log(this.selectedCategory);


    this.flashcardlist = this.service.get("flashcards");
    this.flashcardlist.subscribe(data => {
      let count = 0;
      let tempArray: Flashcard[] = []
      for (let flashcard of data) {
        if (flashcard.category === this.selectedCategory) {
          tempArray.push(flashcard);
          count++;
          //console.log(count);
        }
      }

      this.arrayLength = tempArray.length - 1;

      console.log(this.arrayLength);

      //After that we convert it to an Observable<Flashcard[]> array
      this.filteredAndSlicedList = tempArray.length > 0 ? of(tempArray) : null;
      //console.log(tempArray.length);

    });


  }

  //On eachy card clik we go to the next card until last element
  onCardClick(id: number): void {
    console.log(this.selectedCard);
    this.selectedCard = id + 1;

    //We set the current card index to zero
    if (this.selectedCard >= this.arrayLength + 1) {
      this.isLastItem = true;
      this.selectedCard = 0;


    }
    console.log(this.isLastItem);

  }

  setToZero() {
    this.selectedCard = 0;
    console.log("Test");
  }



/*   //filer based on categories
  filterItems(category: string) {
    this.filteredItems = this.items.filter(item => item.category === category);
  } */

/* 
  favorites: Flashcard[] = [];


  onFavorite(event: Flashcard): void {

    console.log(event);

    if (event?.star) {
      this.favorites.push(event);
    }
    this.favorites = this.favorites.filter(item => item.star)
  } */



}
