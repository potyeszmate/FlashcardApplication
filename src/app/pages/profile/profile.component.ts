import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { getPersonForm } from 'src/app/forms/person.form';
import { User } from 'src/app/shared/modells/user.model';
import { FbCrudService } from 'src/service/fb-crud.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  form: FormGroup | null = null;
  
  @Input() user?: User;

  users: Observable<User[]> | null = null;


//teszt user adatkiirasra
  profileForm = new FormGroup({
  uid: new FormControl(''),
  displayName: new FormControl(''),
  uname: new FormControl(''),
  

})


constructor(public afAuth: AngularFireAuth,  private service: FbCrudService) { }

ngOnInit(): void {
  this.initForm();
  //this.getUserName();
  
}

/* getUsername() :void{
  this.users = this.service.getUsername('users');
  console.log(this.users);
} */

  initForm(): void {
    this.form = getPersonForm();
    const idFormArray = this.form.get('identifier') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls['value'].setValue('laki@webkert.com');  //.value
  }

  log(): void {
    console.log(this.form?.value);
  }

}
