import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    //this.authService.logout();

  }

  error = false;
  alertMessage = '';

  

  constructor(private router: Router,public authService: AuthService) {}

  
  //Login form for user login 
  form: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.minLength(8), Validators.required]),

  });



  login(){
    if(this.form.invalid){
      return;
    }

    this.authService.login(this.form.value.email, this.form.value.password ).then(

      result =>{
        console.log(result);
        this.navTo('/home');
      },

      (error) => {
        this.alertMessage = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') ? this.alertsList.user() : this.alertsList.server();
      }

    );
  }

  //alert if something is wrong in login
  alertsList: any = {
    user: () => 'Wrong username or password',
    server: () => 'Server is not available',
    false: () => '',

  };

  //google login reg
  
  googleLogin() {
    this.authService.googleAuth()
  }

  /* facebookLogin() {
    this.authService.loginWithFacebook()
  }
 */

  navTo(url: string)
  {
    this.router.navigateByUrl(url);

  }

}


/*
  //Allert for login error
  alertsList: any = {
    user: () => 'Wrong username or password',
    server: () => 'Service is not available',
    false: () => '',

  }; */

