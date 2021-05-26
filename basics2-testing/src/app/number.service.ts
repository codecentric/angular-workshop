import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  numberHistory: Array<number> = [];

  constructor() {}

  getRandomNumber() {
    const randomNumber = Math.random();
    this.numberHistory.push(randomNumber);

    return randomNumber;
  }

  getPreviousNumber() {
    return this.numberHistory[this.numberHistory.length - 2];
  }
}
