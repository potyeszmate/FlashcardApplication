import { Component } from '@angular/core';
import { TitleService } from 'src/service/routing/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: TitleService){
    this.titleService.refreshTitle();
  }

  //clean code

  //Study page: filter card to categories, restore index when last in loop to 0, isLast to boolean
  //favourite flashcards - correct it, connect with firebase
  //Inquiery: only 10 cards view, when clicked all, next (?)

  //CRUD: Edit - show old values
  //CRUD: no stars
  //mobile view
  
  //profile page- name (?)
  //upload image?

}
