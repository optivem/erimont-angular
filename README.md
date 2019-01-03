# northwind-angular
Optivem Northwind (Angular)

# Instructions

## Components - Supplier

Go to src\northwind (application root):

ng g component suppliers
ng g component supplier-detail
ng g component supplier-add
ng g component supplier-edit

These are generated inside src\northwind\src\app (i.e. you will see folders supplier-add, supplier-detail, supplier-edit, suppliers).

They are registered inside src\northwind\src\app\app.module.ts

## Routing - Supplier

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

## Services - Setup

Open the file src\northwind\src\app\app.module.ts

Adding the following imports:

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

These are also registered inside @NgModule imports, added between BrowserModule (existing) and AppRoutingModule (existing):

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  
## Services - Supplier

Create a new file src\northwind\src\app\supplier.ts

## Services - API

Creating a service:

ng g service api

This creates files:

src\northwind\src\app\api.service.spec.ts
src\northwind\src\app\api.service.ts

Inside src\northwind\src\app\api.service.ts:

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

Also these constants:

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

And the following constructor injection:

  constructor(private http: HttpClient) { }
 
Error handling function:
 
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

## Services - Supplier

Inside src\northwind\src\app\api.service.ts:

import { Supplier } from './supplier';

const apiUrl = "/api/v1/suppliers";

Crud functions:

getSuppliers (): Observable<Supplier[]> {
  return this.http.get<Supplier[]>(apiUrl)
    .pipe(
      tap(heroes => console.log('fetched suppliers')),
      catchError(this.handleError('getSuppliers', []))
    );
}

getSupplier(id: number): Observable<Supplier> {
  const url = `${apiUrl}/${id}`;
  return this.http.get<Supplier>(url).pipe(
    tap(_ => console.log(`fetched supplier id=${id}`)),
    catchError(this.handleError<Supplier>(`getSupplier id=${id}`))
  );
}

addSupplier (supplier): Observable<Supplier> {
  return this.http.post<Supplier>(apiUrl, supplier, httpOptions).pipe(
    tap((supplier: Supplier) => console.log(`added supplier w/ id=${supplier.id}`)),
    catchError(this.handleError<Supplier>('addSupplier'))
  );
}

updateSupplier (id, supplier): Observable<any> {
  const url = `${apiUrl}/${id}`;
  return this.http.put(url, supplier, httpOptions).pipe(
    tap(_ => console.log(`updated supplier id=${id}`)),
    catchError(this.handleError<any>('updateSupplier'))
  );
}

deleteSupplier (id): Observable<Supplier> {
  const url = `${apiUrl}/${id}`;

  return this.http.delete<Supplier>(url, httpOptions).pipe(
    tap(_ => console.log(`deleted supplier id=${id}`)),
    catchError(this.handleError<Supplier>('deleteSupplier'))
  );
}