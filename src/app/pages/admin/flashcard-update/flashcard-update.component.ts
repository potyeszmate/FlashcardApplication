import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';
import { Observable } from 'rxjs';
import { FbCrudService } from 'src/app/service/fb-crud.service';

@Component({
  selector: 'app-flashcard-update',
  templateUrl: './flashcard-update.component.html',
  styleUrls: ['./flashcard-update.component.scss']
})
export class FlashcardUpdateComponent {

  //clicked flashcard's properties
  hunPhrase: string = "";
  engPhrase: string = "";
  selected: string = "Non";

  categories = ['Human', 'Work', 'Study', 'Hobby', 'Sport', 'Food', 'Politics'];
  
  selectedCategory: string = 'Sport';


  //Get the clicked flashcards values
  constructor(public dialogRef: MatDialogRef<FlashcardUpdateComponent>, flashcardService: FbCrudService) {
    this.hunPhrase = flashcardService.hunPhrase;
    this.engPhrase = flashcardService.engPhrase;
    this.selected = flashcardService.category;

  }


  formUpdate: FormGroup = new FormGroup({
    id: new FormControl(''),
    hunPhrase: new FormControl(''),
    engPhrase: new FormControl(''),
    category: new FormControl(''),

  });

  //sets the selected category
  changeCategory(value: string) {
    this.selectedCategory = value;
    console.log(this.selectedCategory);
    console.log(typeof this.selectedCategory);

  }


}