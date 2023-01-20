import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard-delete',
  templateUrl: './flashcard-delete.component.html',
  styleUrls: ['./flashcard-delete.component.scss']
})
export class FlashcardDeleteComponent {

  constructor(public dialogRef: MatDialogRef<FlashcardDeleteComponent>,private router: Router) { }

  //yes or no answers
  categories = ['No', 'Yes'];
  //init. by defaul: No
  selectedCategory: string = 'No';

  //Formgroup ford delete (yes or no)
  deleteForm: FormGroup = new FormGroup({
    category: new FormControl(''),

  });


   //Sets the value the the selectedCategory variable
   changeCategory(value: string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);
    console.log(typeof this.selectedCategory);

  }

}
