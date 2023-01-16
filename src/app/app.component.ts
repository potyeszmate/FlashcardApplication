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

  //CRUD: Add and upgrade select category 
  //Study page: filter card to categories, restore index when last in loop to 0, isLast to boolean
  //Inquiery page: restore values on select change
  //CRUD, Inquiery: flex, wrap, left to to right
  // better SCSS
  //clean code
  //other features

}
