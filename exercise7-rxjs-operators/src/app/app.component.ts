import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  filter,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Customer, CustomerService } from './core/customer.service';
import { Address, AddressService } from './core/address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  customerNumber: string = '';
  customerNumber$: BehaviorSubject<string> = new BehaviorSubject('');
  validatedCustomerNumber$: Observable<string>;
  customer$: Observable<Customer | null>;
  address$: Observable<Address | null>;

  constructor(
    private readonly customerService: CustomerService,
    private readonly addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.validatedCustomerNumber$ = this.customerNumber$.pipe(
      debounceTime(500),
      filter((customerNumber) => this.isNumeric(customerNumber)),
      startWith('')
    );

    this.customer$ = this.validatedCustomerNumber$.pipe(
      switchMap((customerNumber) => this.getCustomer(customerNumber))
    );

    this.address$ = this.customer$.pipe(
      switchMap((customer: Customer | null) => this.getAddress(customer))
    );
  }

  updateCustomerNumber(customerNumber: string) {
    this.customerNumber$.next(customerNumber);
  }

  getCustomer(customerNumber: string) {
    return this.customerService
      .getUser(customerNumber)
      .pipe(catchError(() => of(null)));
  }

  getAddress(customer: Customer | null) {
    return this.addressService
      .getAddress(customer?.addressId || '')
      .pipe(catchError(() => of(null)));
  }

  isNumeric(input: string) {
    return !isNaN(+input);
  }
}
