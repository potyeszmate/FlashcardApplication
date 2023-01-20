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

  categories = ['No', 'Yes'];
  //The selected category (by default:Sport)
  selectedCategory: string = 'No';

  //Formgroup for the flashcard add
  deleteForm: FormGroup = new FormGroup({
    category: new FormControl(''),

  });

  navUrl(url: string){
    this.router.navigateByUrl(url);
  }

   //Sets the value the the selectedCategory variable
   changeCategory(value: string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);
    console.log(typeof this.selectedCategory);

  }

}
