import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavigationModule } from '../navigation/navigation.module';
//import { NavigationModule } from '../navigation/navigation.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigationModule,
    
  ]
})
export class HomeModule { }
