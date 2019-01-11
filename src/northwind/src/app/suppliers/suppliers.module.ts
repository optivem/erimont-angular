import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SuppliersComponent } from './suppliers.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
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
