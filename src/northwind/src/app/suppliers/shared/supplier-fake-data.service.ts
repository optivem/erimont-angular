// can be renamed to user-data.ts or... suppliers-data.ts

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ISupplier } from './supplier';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierFakeDataService implements InMemoryDbService {

  createDb() {
    const suppliers = [
      { id: 1,
      company: 'Meridian Solutions',
      lastName: 'Jones',
      firstName: 'Paul',
      emailAddress: 'paul.john@meridian.com',
      jobTitle: 'Mr',
      businessPhone: '+44 1865 263600',
      homePhone: '+44 1865 263601',
      mobilePhone: '+44 1865 263602',
      faxNumber: '+44 1865 263611',
      address: 'Queen St',
      city: 'Oxford',
      stateProvince: '',
      zipPostalCode: 'OX1 1TR',
      countryRegion: 'UK',
      webPage: 'www.meridian.com',
      notes: '' },

      { id: 2,
      company: 'ECCO Leather',
      lastName: 'Smith',
      firstName: 'Mark',
      emailAddress: 'mark.smith@ecco.com',
      jobTitle: 'Mr',
      businessPhone: '+44 20 3371 2301',
      homePhone: '+44 20 3371 2300',
      mobilePhone: '+44 20 3371 2001',
      faxNumber: '+44 20 3371 2322',
      address: 'Ariel Way, White City',
      city: 'London',
      stateProvince: '',
      zipPostalCode: 'W12 7GF',
      countryRegion: 'UK',
      webPage: 'www.ecco.com',
      notes: '' },
    ];
    return {suppliers};
  }

  genId(suppliers: ISupplier[]): number {
    return suppliers.length > 0 ? Math.max(...suppliers.map(supplier => supplier.id)) + 1 : 11;
  }
}
