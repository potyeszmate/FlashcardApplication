import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-flashcard-update',
  templateUrl: './flashcard-update.component.html',
  styleUrls: ['./flashcard-update.component.scss']
})
export class FlashcardUpdateComponent {

  formUpdate: FormGroup = new FormGroup({
    id: new FormControl(''),
    hunPhrase: new FormControl(''),
    engPhrase: new FormControl(''),
    category: new FormControl(''),
    

  });

  constructor(public dialogRef: MatDialogRef<FlashcardUpdateComponent>) { }


}
