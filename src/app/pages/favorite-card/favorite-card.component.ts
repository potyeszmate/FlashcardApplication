import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FbCrudService } from 'src/app/service/fb-crud.service';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {

  @Input() favorite: Flashcard = {} as any;
  favorites: Observable<Flashcard[]> | null = null;


  constructor(private service: FbCrudService) { }

  ngOnInit(): void {
    this.getFlashcards();

  }

  getFlashcards() :void{
    this.favorites = this.service.get('flashcards');
  }

  
}
