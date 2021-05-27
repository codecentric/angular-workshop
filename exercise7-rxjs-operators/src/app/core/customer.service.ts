import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: Customer[] = [
    {
      customerNumber: '1234',
      firstName: 'Max',
      lastName: 'Mustermann',
      addressId: '2e13139e-1b6a-4bf1-b9d2-65530af1c70d',
    },
  ];

  getUser(customerNumber: string): Observable<Customer | null> {
    const customer = this.customers.find(
      (customer) => customer.customerNumber === customerNumber
    );

    return customer
      ? of(customer).pipe(delay(500))
      : throwError('user not found').pipe(delay(100));
  }
}

export interface Customer {
  customerNumber: string;
  firstName: string;
  lastName: string;
  addressId: string;
}
