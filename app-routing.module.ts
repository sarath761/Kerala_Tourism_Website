import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { DistrictpageComponent } from './pages/districtpage/districtpage.component';
import { HomepagesComponent } from './pages/homepages/homepages.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';

const routes: Routes = [
  {
    path:'',component:HomepagesComponent
  },
  {
    path:'contactpage',component:ContactpageComponent
  },
  {
    path:'signuppage',component:SignuppageComponent
  },
  {
    path:'districtpage',component:DistrictpageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

