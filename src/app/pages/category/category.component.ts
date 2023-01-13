import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';
import { FbCrudService } from 'src/service/fb-crud.service';

interface Category {
  value: string;
  categoryName: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

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

  constructor( private service: FbCrudService) { }

  flashcardlist: Observable<Flashcard[]> | null = null;
  //category? = '';



  ngOnInit(): void {
    //this.category = '';
    this.getFlashcards();
  }

  getFlashcards() :void{
    this.flashcardlist = this.service.get('flashcards');
  }

  ////

}
