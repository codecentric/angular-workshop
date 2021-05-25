import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  number = 0;

  constructor(private readonly random: RandomService) {}

  ngOnInit(): void {
    this.number = this.random.getRandomNumber();
  }
}
