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

  constructor(public afAuth: AngularFireAuth,  private service: FbCrudService) { }

  /* 
  form: FormGroup | null = null;
  
  @Input() user?: User;

  users: Observable<User[]> | null = null;


  profileForm = new FormGroup({
  uid: new FormControl(''),
  displayName: new FormControl(''),
  uname: new FormControl(''),
  

}) 


ngOnInit(): void {
  this.initForm();
  
}


  initForm(): void {
    this.form = getPersonForm();
    const idFormArray = this.form.get('identifier') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls['value'].setValue('email');  
  }

  log(): void {
    console.log(this.form?.value);
  } */

}
