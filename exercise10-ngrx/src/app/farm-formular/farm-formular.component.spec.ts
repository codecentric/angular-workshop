import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmFormularComponent } from './farm-formular.component';

describe('FarmFormularComponent', () => {
  let component: FarmFormularComponent;
  let fixture: ComponentFixture<FarmFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
