import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error = false;
  isSignedIn = false;

  
  constructor(private router: Router, private authService : AuthService) { }

  //sign up and authentication 
  registration(): void {
    this.error = false;
    if(this.form.valid )
    {
      if(this.form.value.password1 === this.form.value.password2)
      {
        //console.log(this.form.value);
        this.router.navigateByUrl("/login");
        return;
      }
    }
    this.error = true;

  }

  async onSignUp(email: string, password: string) {
    await this.authService.signup(email,password);
    if(this.authService.isLoggedIn){
      this.isSignedIn = true;
    }
  }

  //register form
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('',[Validators.required, Validators.email]),
    password1: new FormControl('',[Validators.minLength(8), Validators.required]),
    password2: new FormControl('',[Validators.minLength(8), Validators.required]),

  });

}
