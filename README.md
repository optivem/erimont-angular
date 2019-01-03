# northwind-angular
Optivem Northwind (Angular)

# Instructions

## Components

Go to src\northwind (application root):

ng g component suppliers
ng g component supplier-detail
ng g component supplier-add
ng g component supplier-edit

These are generated inside src\northwind\src\app (i.e. you will see folders supplier-add, supplier-detail, supplier-edit, suppliers).

They are registered inside src\northwind\src\app\app.module.ts

## Routing

Open the file src\northwind\src\app\app-routing.module.ts

Add these imports:

import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';

Inside the existing routes constant

const routes: Routes = [];

You need to add the following:

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