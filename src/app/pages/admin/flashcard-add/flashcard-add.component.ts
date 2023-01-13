import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

interface Category {
  value: string;
  categoryName: string;
}

@Component({
  selector: 'app-flashcard-add',
  templateUrl: './flashcard-add.component.html',
  styleUrls: ['./flashcard-add.component.scss']
})
export class FlashcardAddComponent {

  @Output() onSelected = new EventEmitter<any>();

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

  /* changeCategory(value:string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);

  } */

  onSelectedProduct(product: string) {
    console.log(product);
    this.onSelected.emit(product);
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    hunPhrase: new FormControl(''),
    engPhrase: new FormControl(''),
    category: new FormControl(''),
    

  });

  constructor(public dialogRef: MatDialogRef<FlashcardAddComponent>) { }


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