import {Component, Input, EventEmitter, Output} from '@angular/core';

interface User {
  firstname: String;
  lastname: String;
  city: String;
}

@Component({
  selector: 'presentational-example',
  template: `
     <div (click)="clickEmitter.emit()">
        <span class="username">
          {{user.lastname}}, {{user.firstname}}
        </span>
        <span class="city">
          Lives in {{user.city}}
        </span>
     </div>
  `,
  styleUrls: ['./presentational-example.component.css']
})
export class PresentationalExampleComponent {

  @Input()
  user: User;

  @Output('clicked')
  clickEmitter = new EventEmitter<void>();
}