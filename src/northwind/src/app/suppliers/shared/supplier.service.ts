import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Supplier } from './supplier';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:54764/api/suppliers";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }
  
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
      tap((supplier: Supplier) => console.log(`added supplier w/ id=${supplier.supplierId}`)),
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
    
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

