import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';

const routes: Routes = [
  {
    path: 'suppliers',
    component: SuppliersComponent,
    data: { title: 'List of Suppliers' }
  },
  {
    path: 'supplier-details/:id',
    component: SupplierDetailComponent,
    data: { title: 'Supplier Details' }
  },
  {
    path: 'supplier-add',
    component: SupplierAddComponent,
    data: { title: 'Add Supplier' }
  },
  {
    path: 'supplier-edit/:id',
    component: SupplierEditComponent,
    data: { title: 'Edit Supplier' }
  },
  { path: '',
    redirectTo: '/suppliers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
