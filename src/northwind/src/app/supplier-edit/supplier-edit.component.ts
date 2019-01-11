import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {

  supplierForm: FormGroup;
  id: number=0;
  company: string='';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getSupplier(this.route.snapshot.params['id']);
    this.supplierForm = this.formBuilder.group({
      'id' : [null, Validators.required],      
      'company' : [null, Validators.required]
    });
  }

  getSupplier(id) {
    this.api.getSupplier(id).subscribe(data => {
      this.id = data.id;
      this.supplierForm.setValue({
        id: data.id,
        company: data.company
      });
    });
  }

  onFormSubmit(form:NgForm) {
    let id = this.id; 
    this.isLoadingResults = true;
    this.api.updateSupplier(this.id, form)
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
