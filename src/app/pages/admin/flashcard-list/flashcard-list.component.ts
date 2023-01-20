import { Flashcard } from '../../../shared/modells/flashcard.model';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FlashcardAddComponent } from '../flashcard-add/flashcard-add.component';
import { FlashcardUpdateComponent } from '../flashcard-update/flashcard-update.component';
import { FbCrudService } from 'src/app/service/fb-crud.service';
import { FlashcardDeleteComponent } from '../flashcard-delete/flashcard-delete.component';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.scss']
})
export class FlashcardListComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: FbCrudService) { }

  //flashcard and flashard array observable
  flashcards: Observable<Flashcard[]> | null = null;
  flashcard: Observable<Flashcard> | null = null;


  //Init. flashcards
  ngOnInit(): void {
    this.getFlashcards();
  }
  //Get flashcard list from the serveice
  getFlashcards(): void {
    this.flashcards = this.service.get('flashcards');
  }


  //Add flashcard (opening the add dialog)
  openDialog(): void {

    const dialogRef = this.dialog.open(FlashcardAddComponent, {
      //height: '400px',
      //width: '600px',
    });

    dialogRef.afterClosed().subscribe((result: Flashcard) => {
      console.log(result);
      console.log(result.category);


      if (result?.hunPhrase) {
        //result.category = this.cat.selectedCategory;
        this.service.add('flashcards', result);
        //this.games.push(result);
      }

    }, err => {
      console.warn(err);
    });
  }


  //UpdateFlashcard (pressing the edit btn)
  updateFlashcard(id: string, engPhrase: string, hunPhrase: string, category: string): void {
    this.service.getById('flashcards', id);
    this.service.setFlashcard(engPhrase, hunPhrase, category);
    console.log(this.service.hunPhrase);
    console.log(this.service.engPhrase);
    const dialogRef = this.dialog.open(FlashcardUpdateComponent, {
      //Set the dialog size for example
      
    });

    dialogRef.afterClosed().subscribe((result: Flashcard) => {
      console.log(result);
      

      if (result?.hunPhrase) {
        //Set the id to the flashcard (we need the sam id) and update with the new values
        result.id = id;
        this.service.update('flashcards', id, result);
      }

    }, err => {
      console.warn(err);
    });
  }

/*   //delete flashcard
  deleteFlashcard(id: string): void {
    console.log(id);
    this.service.delete(id);
  }
 */

  confirmed:boolean = false;


   //Delete flashcard
   delete(id: string): void {
    this.service.getById('flashcards', id);
    const dialogRef = this.dialog.open(FlashcardDeleteComponent, {
      //Set the dialog size for example
    });

    dialogRef.afterClosed().subscribe((result: Flashcard) => {

      if (result?.category === "Yes") {
        //Set the id to the flashcard (we need the sam id) and update with the new values
        console.log(result);
        //Set the id to the flashcard (we need the sam id) and update with the new values
        this.service.delete(id);
      }      

    }, err => {
      console.warn(err);
    });
  }
/* 
  //Stores the selected flashcards values, to show it on the update dialog
  selectFlashcard( engPhrase: string, hunPhrase: string, category: string) {
    this.service.setFlashcard(engPhrase, hunPhrase, category);
    console.log(this.service.hunPhrase);
    console.log(this.service.engPhrase);
  }
 */

}