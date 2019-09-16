import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SupplierFakeDataService } from './shared/supplier-fake-data.service';

import { MaterialModule } from '../material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SuppliersComponent } from './suppliers.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SuppliersRoutingModule } from './suppliers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      SupplierFakeDataService, { dataEncapsulation: false }
    ),

    BrowserAnimationsModule,
    MaterialModule,
    SuppliersRoutingModule
  ],
  declarations: [
    SuppliersComponent,
    SupplierDetailComponent,
    SupplierAddComponent,
    SupplierEditComponent
  ],
  exports: [
    SuppliersComponent,
    SupplierDetailComponent,
    SupplierAddComponent,
    SupplierEditComponent
  ],
})
export class SuppliersModule { }
