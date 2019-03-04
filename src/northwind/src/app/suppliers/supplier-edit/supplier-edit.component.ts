import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { SupplierService } from '../shared/supplier.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {

  supplierForm: FormGroup;
  
  id: number=0;
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

  constructor(private router: Router, private route: ActivatedRoute, private service: SupplierService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getSupplier(this.route.snapshot.params['id']);
    this.supplierForm = this.formBuilder.group({
      'id' : [null, Validators.required],      
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
      'notes' : [null, Validators.required]
    });
  }

  getSupplier(id) {
    this.service.getSupplier(id).subscribe(data => {
      this.id = data.id;
      this.supplierForm.setValue({
        id: data.id,
        company: data.company,
        lastName: data.lastName,
        firstName: data.firstName,
        emailAddress: data.emailAddress,
        jobTitle: data.jobTitle,
        businessPhone: data.businessPhone,
        homePhone: data.homePhone,
        mobilePhone: data.mobilePhone,
        faxNumber: data.faxNumber,
        address: data.address,
        city: data.city,
        stateProvince: data.stateProvince,
        zipPostalCode: data.zipPostalCode,
        countryRegion: data.countryRegion,
        webPage: data.webPage,
        notes: data.notes
      });
    });
  }

  onFormSubmit(form:NgForm) {
    let id = this.id; 
    this.isLoadingResults = true;
    this.service.updateSupplier(this.id, form)
      .subscribe(res => {
          // TODO: VC: Handling no-result case
          // let id = res["id"];
          this.isLoadingResults = false;
          this.router.navigate(['/supplier-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  supplierDetails() {
    this.router.navigate(['/supplier-details', this.id]);
  }
}
