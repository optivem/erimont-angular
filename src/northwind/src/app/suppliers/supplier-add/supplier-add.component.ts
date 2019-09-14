import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { SupplierService } from '../shared/supplier.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit {

  supplierForm: FormGroup;

  company: string='';
  lastName: string='';
  firstName: string='';
  emailAddress: string='';
  jobTitle: string='';
  businessPhone: string='';
  homePhone: string='';
  mobilePhone: string='';
  faxNumber: string='';
  address: string='';
  city: string='';
  stateProvince: string='';
  zipPostalCode: string='';
  countryRegion: string='';
  webPage: string='';
  notes: string='';

  isLoadingResults = false;

  constructor(private router: Router, private service: SupplierService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.supplierForm = this.formBuilder.group({
      'company' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'emailAddress' : [null, Validators.required],
      'jobTitle' : [null, Validators.required],
      'businessPhone' : [null, Validators.required],
      'homePhone' : [null, Validators.required],
      'mobilePhone' : [null, Validators.required],
      'faxNumber' : [null, Validators.required],
      'address' : [null, Validators.required],
      'city' : [null, Validators.required],
      'stateProvince' : [null, Validators.required],
      'zipPostalCode' : [null, Validators.required],
      'countryRegion' : [null, Validators.required],
      'webPage' : [null, Validators.required],
      // [null, null]
      'notes' : [null, Validators.required]
    });
  }

  /* createUser(): void {
    this.userService.createUser(this.user)
    .subscribe( data => {
      alert("User created successfully.");
    }); */

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.service.addSupplier(form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/supplier-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
