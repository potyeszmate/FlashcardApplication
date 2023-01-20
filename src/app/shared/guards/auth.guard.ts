import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private router: Router, private auth: AuthService) {}

    //A simple autgard for users (before logging in, we cant reach certain sites)

    //If we go to an outher page when there is no current user (so not logged in) -> go back to login page
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.currentUserObservable().pipe (
            take(1),
            map(user => !!user),
            tap(loggedIn => {
                if(!loggedIn) {
                    this.router.navigate(['/login']);
                }
            })
        );
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route,state);
        
    }
}