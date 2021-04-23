import {Component, OnInit} from '@angular/core';

interface User {
    id: String;
    firstname: String;
    lastname: String;
    address: Address;
}

@Component({
    selector: 'smart-example',
    template: `
    <div>
      <user-name 
        [user]="user" 
      </user-name>
      <hr>
      <user-address *ngIf="user"
        class="full-width" 
        [address]="getAddress(user)">
      </user-address>
    </div>
  `,
    styleUrls: ['./smart-example.component.css']
})
export class SmartExampleComponent implements OnInit {
    user: User
    address: Address

    constructor(
        private readonly userService: UserService,
        private readonly addressService: AddressService
    ) {
    }

    ngOnInit() {
        this.user = this.userService.getUser('userId')
    }

    getAddress(user): Address {
      const address = user.address
          ? user.address
          : this.addressService.getAddressByUserId(this.user.id)

      if (user.address?.countryCode !== "DE"){
        throw Error(`no german address was found for userId ${user.id}`)
      }

      return address
    }
}
