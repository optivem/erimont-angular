import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// TODO: CoreModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { SuppliersModule } from './suppliers/suppliers.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SuppliersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
