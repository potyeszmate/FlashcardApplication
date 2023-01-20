import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  constructor(private router: Router, private authService: AuthService, public auth: AngularFireAuth) { }

  //Logging the user out
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
  //navigate to the given page
  navUrl(url: string){
    this.router.navigateByUrl(url);
  }


}
