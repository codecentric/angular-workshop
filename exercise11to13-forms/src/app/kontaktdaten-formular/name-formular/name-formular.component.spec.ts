import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameFormularComponent } from './name-formular.component';

describe('NameFormularComponent', () => {
  let component: NameFormularComponent;
  let fixture: ComponentFixture<NameFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
