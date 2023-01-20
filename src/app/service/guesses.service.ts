import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GuessService {

    //Service for the correct and incorrect guesses for the inquiry page

    //This BehaviorSubject needed because wee need responsive correct=incorrect values
    private correctSubject = new BehaviorSubject<number>(0);
    private incorrectSubject = new BehaviorSubject<number>(0);

    correctValue$ = this.correctSubject.asObservable();;
    incorrectValue$ = this.incorrectSubject.asObservable();;

    //Incr. correct value
    increaseCorrectValue() {
      this.correctSubject.next(this.correctSubject.getValue() + 1);
    }

    //Incr incorrect value
    increaseIncorrectValue() {
      this.incorrectSubject.next(this.incorrectSubject.getValue() + 1);
    }

    //Set values to 0
    refreshValues() {
      this.correctSubject.next(this.correctSubject.getValue() * 0);
      this.incorrectSubject.next(this.incorrectSubject.getValue() * 0);
      }
}
