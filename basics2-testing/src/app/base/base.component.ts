import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  number = 0;
  displayChild = false;

  constructor(public readonly random: NumberService) {}

  ngOnInit(): void {
    this.generateNumber();
  }

  generateNumber() {
    this.number = this.random.getRandomNumber();
  }
}
