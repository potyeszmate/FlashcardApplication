import { Injectable, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, RouterState, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class TitleService implements OnDestroy {

  titleSubscription: Subscription | any;

  constructor(private router: Router, private title: Title) { }

  //A sample for dynamic title title


  ngOnDestroy(): void {
    this.titleSubscription.unsubscribe();
  }


  //Refresh for the current title
  refreshTitle(): void {
    this.titleSubscription = this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState,this.router.routerState.root).join('-');
        this.title.setTitle(title);
      }
    })
  }

  //Get the current title
  getTitle(state: RouterState | any, parent: ActivatedRoute): any[] {
    const data = [];

    if(parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }

    if(state && parent)
    {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }

    return data;
  }
}