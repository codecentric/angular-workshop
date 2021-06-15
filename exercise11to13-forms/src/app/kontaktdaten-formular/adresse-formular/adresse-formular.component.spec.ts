import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseFormularComponent } from './adresse-formular.component';

describe('AdresseFormularComponent', () => {
  let component: AdresseFormularComponent;
  let fixture: ComponentFixture<AdresseFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresseFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
