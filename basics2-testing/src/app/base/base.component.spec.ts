import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';
import { NumberService } from '../number.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;
  let numberServiceMock: any;

  beforeEach(async () => {
    numberServiceMock = { getRandomNumber: () => 0.5 };

    await TestBed.configureTestingModule({
      declarations: [BaseComponent, ChildComponentMock],
      providers: [{ provide: NumberService, useValue: numberServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the number', () => {
    expect(component.number).toBeDefined();
    expect(component.number).toBeGreaterThan(0);
  });

  it('should call the NumberService on init', () => {
    spyOn(numberServiceMock, 'getRandomNumber').and.callThrough();

    expect(numberServiceMock.getRandomNumber).not.toHaveBeenCalled();
    component.ngOnInit();

    expect(numberServiceMock.getRandomNumber).toHaveBeenCalled();
  });

  it('should call the NumberService when generating a new number', () => {
    spyOn(numberServiceMock, 'getRandomNumber').and.callThrough();

    expect(numberServiceMock.getRandomNumber).not.toHaveBeenCalled();
    component.generateNumber();

    expect(numberServiceMock.getRandomNumber).toHaveBeenCalled();
  });

  it('should render the generated number', () => {
    spyOn(numberServiceMock, 'getRandomNumber').and.returnValue(0.423);
    component.generateNumber();
    fixture.detectChanges();

    expect(fixture.nativeElement.innerHTML).toContain('0.423');
  });
});

@Component({
  selector: 'app-child',
  template: 'this is the mocked child component',
})
class ChildComponentMock {
  @Input()
  number = 0;

  @Output()
  numberGenerated: EventEmitter<void> = new EventEmitter();
}
