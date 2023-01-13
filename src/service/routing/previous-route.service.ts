import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root'
})
export class PrevRouteService {
  private history: any[] = [];

  constructor(private router: Router) { }

  public loadRouting(){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(({urlAfterRedirects}: any) => {
      this.history = [... this.history, urlAfterRedirects];
    }
    );
  }
  
  public getHistory(): string[]{
    return this.history;
  }

  public getPrevious(): string[]{
    return this.history[this.history.length - 2] || '/';
  }
}