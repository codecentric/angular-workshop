import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input()
  number = 0;

  @Output()
  numberGenerated: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
