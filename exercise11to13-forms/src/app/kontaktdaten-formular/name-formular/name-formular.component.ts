import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-formular',
  templateUrl: './name-formular.component.html',
  styleUrls: ['./name-formular.component.scss'],
})
export class NameFormularComponent implements OnInit {
  @Input()
  parentForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}
}
