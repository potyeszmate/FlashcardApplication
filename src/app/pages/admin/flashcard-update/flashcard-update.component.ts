import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-flashcard-update',
  templateUrl: './flashcard-update.component.html',
  styleUrls: ['./flashcard-update.component.scss']
})
export class FlashcardUpdateComponent {


  constructor(public dialogRef: MatDialogRef<FlashcardUpdateComponent>) { }

  categories = ['Human', 'Work', 'Study','Hobby', 'Sport', 'Food','Politics'];


  formUpdate: FormGroup = new FormGroup({
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



}
