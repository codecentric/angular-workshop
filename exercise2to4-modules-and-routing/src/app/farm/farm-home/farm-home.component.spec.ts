import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmHomeComponent } from './farm-home.component';

describe('FarmHomeComponent', () => {
  let component: FarmHomeComponent;
  let fixture: ComponentFixture<FarmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
