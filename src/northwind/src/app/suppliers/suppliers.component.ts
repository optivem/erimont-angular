import { Component, OnInit } from '@angular/core';
import { SupplierService } from './shared/supplier.service';
import { Supplier } from './shared/supplier';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'company',
    'lastName',
    'firstName',
    'emailAddress',
    'jobTitle',
    'businessPhone',
    'homePhone',
    'mobilePhone',
    'faxNumber',
    'address',
    'city',
    'stateProvince',
    'zipPostalCode',
    'countryRegion',
    'webPage',
    'notes'
  ];

  data: Supplier[] = [];
  isLoadingResults = true;

  // constructor(private apiService: ApiService) { }
  // constructor(private api: ApiService) { }
  constructor(private service: SupplierService) { }

  ngOnInit() {
    this.service.getSuppliers()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
