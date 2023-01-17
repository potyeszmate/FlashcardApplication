import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';
import { FbCrudService } from 'src/service/fb-crud.service';

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
