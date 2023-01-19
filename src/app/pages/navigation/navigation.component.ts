import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/service/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  //categories = CATEGORIES;

  constructor(private router: Router, private authService: AuthService, public auth: AngularFireAuth) { }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  
  navUrl(url: string){
    this.router.navigateByUrl(url);
  }

/*   currentYear = new Date().getFullYear();
 */

}
