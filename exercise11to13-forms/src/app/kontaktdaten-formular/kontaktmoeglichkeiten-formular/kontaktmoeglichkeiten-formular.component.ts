import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kontaktmoeglichkeiten-formular',
  templateUrl: './kontaktmoeglichkeiten-formular.component.html',
  styleUrls: ['./kontaktmoeglichkeiten-formular.component.scss'],
})
export class KontaktmoeglichkeitenFormularComponent implements OnInit {
  @Input()
  parentForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}
}
