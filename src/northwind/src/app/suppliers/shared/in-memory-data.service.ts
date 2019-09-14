// can be renamed to user-data.ts or... suppliers-data.ts

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Supplier } from './supplier';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const suppliers = [
      { id: 1, company: 'Supplier1',
      lastName: 'a',
      firstName: 'b',
      emailAddress: 'c',
      jobTitle: 'd',
      businessPhone: 'dd',
      homePhone: 'd',
      mobilePhone: 'dd',
      faxNumber: 'd',
      address: 'd',
      city: 'dd',
      stateProvince: 'd',
      zipPostalCode: 'd',
      countryRegion: 'dd',
      webPage: 'd',
      notes: 'd' },

      { id: 2, company: 'Supplier2',
      lastName: 'a',
      firstName: 'b',
      emailAddress: 'c',
      jobTitle: 'd',
      businessPhone: 'dd',
      homePhone: 'd',
      mobilePhone: 'dd',
      faxNumber: 'd',
      address: 'd',
      city: 'dd',
      stateProvince: 'd',
      zipPostalCode: 'd',
      countryRegion: 'dd',
      webPage: 'd',
      notes: 'd' },
    ];
    return {suppliers};
  }

  genId(suppliers: Supplier[]): number {
    return suppliers.length > 0 ? Math.max(...suppliers.map(hero => hero.id)) + 1 : 11;
  }
}
