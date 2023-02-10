import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepagesComponent } from './pages/homepages/homepages.component';
import { DistrictpageComponent } from './pages/districtpage/districtpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepagesComponent,
    DistrictpageComponent,
    SignuppageComponent,
    ContactpageComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
