import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PLoginComponent } from './p-login/p-login.component';
import { PListComponent } from './p-list/p-list.component';
import { PHeaderComponent } from './p-header/p-header.component';
import { PFooterComponent } from './p-footer/p-footer.component';

import { ReactiveFormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProductHttpInterceptor} from "../helpers/http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    PLoginComponent,
    PListComponent,
    PHeaderComponent,
    PFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProductHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
