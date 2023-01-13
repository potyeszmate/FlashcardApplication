import { Flashcard } from '../../../shared/modells/flashcard.model';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FlashcardAddComponent } from '../flashcard-add/flashcard-add.component';
import { FlashcardUpdateComponent } from '../flashcard-update/flashcard-update.component';
import { FbCrudService } from 'src/service/fb-crud.service';
import { CategoryComponent } from '../../category/category.component';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.scss']
})
export class FlashcardListComponent implements  OnInit, OnDestroy {

  constructor(private dialog: MatDialog, private service: FbCrudService) { }

  flashcards: Observable<Flashcard[]> | null = null;
  //category? = '';



  ngOnInit(): void {
    //this.category = '';
    this.getFlashcards();
  }

  getFlashcards() :void{
    this.flashcards = this.service.get('flashcards');
  }

  ngOnDestroy(): void {
    //delete this.category;
  }

  openDialog(): void 
  {
    
    const dialogRef = this.dialog.open(FlashcardAddComponent, {
      //height: '400px',
      //width: '600px',
    });

    dialogRef.afterClosed().subscribe((result: Flashcard) => 
    {
      console.log(result);
      console.log(result.category);


      if(result?.hunPhrase)
      {
        //result.category = this.cat.selectedCategory;
        this.service.add('flashcards', result);
        //this.games.push(result);
      }

    }, err => {
      console.warn(err);
    });
  }


  deleteFlashcard(id: string) : void {
    console.log(id);
    this.service.delete(id);
    //this.selectedPokemon = undefined;
  }

  updateFlashcard(id: string): void 
  {

    const dialogRef = this.dialog.open(FlashcardUpdateComponent, {
      //height: '400px',
      //width: '600px',
    });

    dialogRef.afterClosed().subscribe((result: Flashcard) => 
    {
      console.log(result);

      if(result?.hunPhrase)
      {
        result.id = id;
        this.service.update('flashcards',id, result);
        //this.games.push(id);
      }

    }, err => {
      console.warn(err);
    });
  }

}
