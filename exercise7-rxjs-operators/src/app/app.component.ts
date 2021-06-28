import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    //TODO: initialize the required observables:

    // this.validatedCustomerNumber$ = ...

    // this.customer$ = ...

    // this.address$ = ...
  }


  updateCustomerNumber(customerNumber: string) {
    //TODO: update the customerNumber$ subject
  }

  private isNumeric(input: string) {
    return !isNaN(+input);
  }
}
