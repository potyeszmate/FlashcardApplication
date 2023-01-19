import { FbCrudService } from 'src/service/fb-crud.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flashcard-update',
  templateUrl: './flashcard-update.component.html',
  styleUrls: ['./flashcard-update.component.scss']
})
export class FlashcardUpdateComponent {

  hunPhrase:string ="";
  engPhrase:string ="";
  selected:string ="Non";



  constructor(public dialogRef: MatDialogRef<FlashcardUpdateComponent>,private flashcardService: FbCrudService) {
    this.hunPhrase = flashcardService.hunPhrase;
    this.engPhrase = flashcardService.engPhrase;
    this.selected = flashcardService.category;


   }

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