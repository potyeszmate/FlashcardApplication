import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './register.component';


const routes: Routes = [
  {
    path: '', 
    component: RegisterComponent,
    data: { title: 'Registration'}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }