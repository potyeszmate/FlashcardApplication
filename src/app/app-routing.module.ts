import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  //routers Login, Register, Home Admin (with authguards for profile and home)

  {
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]

  },

  {
  path: 'profile', 
  loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
  canActivate: [AuthGuard]

  },
  
  {
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  }, 
  {
    path: '**', 
    redirectTo: "home",
    pathMatch: 'full',
  }
];

@NgModule({
  //relativeLinkResolution: 'legacy'
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules,})],
  exports: [RouterModule]
})
export class AppRoutingModule { }