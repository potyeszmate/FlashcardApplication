import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GuessService {

    private correctSubject = new BehaviorSubject<number>(0);
    private incorrectSubject = new BehaviorSubject<number>(0);

    

    correctValue$ = this.correctSubject.asObservable();;
    incorrectValue$ = this.incorrectSubject.asObservable();;


    increaseCorrectValue() {
      this.correctSubject.next(this.correctSubject.getValue() + 1);

      //this.correctValue++;
    }

    increaseIncorrectValue() {
      this.incorrectSubject.next(this.incorrectSubject.getValue() + 1);

      //this.incorrectValue++;
      }
}