import { SelectionChange } from '@angular/cdk/collections';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/service/category.service';


/* interface Category {
  value: string;
  categoryName: string;
}
 */
@Component({
  selector: 'app-flashcard-add',
  templateUrl: './flashcard-add.component.html',
  styleUrls: ['./flashcard-add.component.scss']
})
export class FlashcardAddComponent {


  constructor(public dialogRef: MatDialogRef<FlashcardAddComponent>, private categoryService: CategoryService) { }

  //Possible categories
  categories = ['Human', 'Work', 'Study', 'Hobby', 'Sport', 'Food', 'Politics'];
  //The selected category (by default:Sport)
  selectedCategory: string = 'Sport';

  @Output() onSelected = new EventEmitter<any>();

  //Formgroup for the flashcard add
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    hunPhrase: new FormControl(''),
    engPhrase: new FormControl(''),
    category: new FormControl(''),


  });


  //Sets the value the the selectedCategory variable
  changeCategory(value: string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);
    console.log(typeof this.selectedCategory);

  }

}