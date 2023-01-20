import { Component } from '@angular/core';
import { TitleService } from 'src/app/service/routing/title.service';

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

  //Study page: restore index when last in loop to 0
  
  //Inquiery: next 10 

  //CRUD: Edit - show old values


  
  //profile page- name (?)
  //upload image?

}
