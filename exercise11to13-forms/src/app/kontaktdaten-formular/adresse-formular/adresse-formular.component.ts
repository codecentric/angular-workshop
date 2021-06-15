import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adresse-formular',
  templateUrl: './adresse-formular.component.html',
  styleUrls: ['./adresse-formular.component.scss'],
})
export class AdresseFormularComponent implements OnInit {
  @Input()
  parentForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}
}
