import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesComponent } from './observables.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ObservablesComponent', () => {
  let component: ObservablesComponent;
  let fixture: ComponentFixture<ObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ObservablesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
