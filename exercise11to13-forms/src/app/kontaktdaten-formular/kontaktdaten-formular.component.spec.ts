import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktdatenFormularComponent } from './kontaktdaten-formular.component';

describe('KontaktdatenFormularComponent', () => {
  let component: KontaktdatenFormularComponent;
  let fixture: ComponentFixture<KontaktdatenFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktdatenFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktdatenFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
