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

  @Output() onSelected = new EventEmitter<any>();


  constructor(public dialogRef: MatDialogRef<FlashcardAddComponent>, private categoryService: CategoryService) { }


  /* categories: Category[] = [
    {value: 'Human', categoryName: 'Human'},
    {value: 'Work', categoryName: 'Work'},
    {value: 'Study', categoryName: 'Study'},
    {value: 'Hobby', categoryName: 'Hobby'},
    {value: 'Sport', categoryName: 'Sport'},
    {value: 'Food', categoryName: 'Food'},
    {value: 'Politics', categoryName: 'Politics'},


  ]; */


  /* changeCategory(value:string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);

  } */

  onSelectedProduct(product: string) {
    console.log(product);
    this.onSelected.emit(product);
  }


  categories = ['Human', 'Work', 'Study','Hobby', 'Sport', 'Food','Politics'];

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    hunPhrase: new FormControl(''),
    engPhrase: new FormControl(''),
    category: new FormControl(''),
    

  });


  selectedCategory: string ='Sport';

  changeCategory(value:string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);
    console.log(typeof this.selectedCategory);


  }



  /*
  close(): void{
    if(this.form.valid)
    {
      this.dialogRef.close(this.form.value);
    }
    
    this.dialogRef.close();
  }
  */

}