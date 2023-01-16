import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  selectedCategory: string ='Nothing';

  changeCategory(value:string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);

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

  onCardClick(id: number): void{
    console.log(this.selectedCard);
    this.selectedCard = id + 1;

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


}
