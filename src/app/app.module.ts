import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UnitsComponent } from './pages/units/units.component';
import { UnitDetailComponent } from './pages/unit-detail/unit-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { AppStateModule } from "./_state/state.module";
import { HttpClientModule } from "@angular/common/http";

// Forms Module - for ngModel


@NgModule({
  declarations: [
    AppComponent,
    UnitsComponent,
    UnitDetailComponent,
    HomeComponent,
    NavComponent,
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
