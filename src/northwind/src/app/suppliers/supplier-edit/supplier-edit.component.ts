import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {

  supplierForm: FormGroup;
  supplierId: number=0;
  companyName: string='';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getSupplier(this.route.snapshot.params['id']);
    this.supplierForm = this.formBuilder.group({
      'supplierId' : [null, Validators.required],      
      'companyName' : [null, Validators.required]
    });
  }

  getSupplier(id) {
    this.api.getSupplier(id).subscribe(data => {
      this.supplierId = data.supplierId;
      this.supplierForm.setValue({
        supplierId: data.supplierId,
        companyName: data.companyName
      });
    });
  }

  onFormSubmit(form:NgForm) {
    let id = this.supplierId; 
    this.isLoadingResults = true;
    this.api.updateSupplier(this.supplierId, form)
      .subscribe(res => {
          // TODO: VC: Handling no-result case
          // let id = res["supplierId"];
          this.isLoadingResults = false;
          this.router.navigate(['/supplier-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  supplierDetails() {
    this.router.navigate(['/supplier-details', this.supplierId]);
  }
}
