import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmInfoHeaderComponent } from './farm-info-header.component';

describe('FarmInfoHeaderComponent', () => {
  let component: FarmInfoHeaderComponent;
  let fixture: ComponentFixture<FarmInfoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmInfoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
