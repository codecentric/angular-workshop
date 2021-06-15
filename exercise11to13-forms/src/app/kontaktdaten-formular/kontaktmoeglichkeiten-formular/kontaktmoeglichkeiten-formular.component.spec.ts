import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktmoeglichkeitenFormularComponent } from './kontaktmoeglichkeiten-formular.component';

describe('KontaktmoeglichkeitenFormularComponent', () => {
  let component: KontaktmoeglichkeitenFormularComponent;
  let fixture: ComponentFixture<KontaktmoeglichkeitenFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktmoeglichkeitenFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktmoeglichkeitenFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
