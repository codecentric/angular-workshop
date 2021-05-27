import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}

  addresses: Address[] = [
    {
      addressId: '2e13139e-1b6a-4bf1-b9d2-65530af1c70d',
      city: 'Musterstadt',
      street: 'Schlossallee',
      streetNr: '1a',
      zipCode: '11111',
    },
  ];

  getAddress(addressId: string): Observable<Address | null> {
    const address = this.addresses.find(
      (address) => address.addressId === addressId
    );

    return address
      ? of(address).pipe(delay(500))
      : throwError('address not found').pipe(delay(100));
  }
}

export interface Address {
  addressId: string;
  street: string;
  streetNr: string;
  city: string;
  zipCode: string;
}
