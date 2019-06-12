import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {ProfileComponent} from './profile/profile.component';
import {LocationComponent} from './location/location.component';
import {SupportComponent} from './support/support.component';
import {FinanceComponent} from './finance/finance.component';
import {FiberComponent} from './fiber/fiber.component';
import {ProspectsComponent} from './prospects/prospects.component';
import {MapsComponent} from './maps/maps.component';
import {DocumentComponent} from './document/document.component';
import {AllCustomerComponent} from './customer/all-customer/all-customer.component';
import {AgGridModule} from "ag-grid-angular";
import {MatExpansionModule} from "@angular/material";
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {CreateCustomerModule} from "./customer/create-customer/create-customer.module";

const adminRoute: Routes = [
  {
    path: "admin", component: AdminComponent,
    children: [
      //  { path: "", component: AdminComponent },
      {path: "home", component: HomeComponent},
      {path: "customer", component: CustomerComponent},
      {path: "profile", component: ProfileComponent},
      {path: "location", component: LocationComponent},
      {path: "support", component: SupportComponent},
      {path: "finance", component: FiberComponent},
      {path: "fiber", component: AdminComponent},
      {path: "prospect", component: ProspectsComponent},
      {path: "map", component: MapsComponent},
      {path: "document", component: DocumentComponent},
      {path: "allcustomer", component: AllCustomerComponent},
      {path: "createcustomer", component: CreateCustomerComponent}


    ]
  }
];

@NgModule({
  declarations: [HomeComponent, CreateCustomerComponent,
    CustomerComponent, ProfileComponent, LocationComponent, SupportComponent, FinanceComponent, FiberComponent, ProspectsComponent, MapsComponent, DocumentComponent, AllCustomerComponent, CreateCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(adminRoute),
    AgGridModule,
    MatExpansionModule,
    CreateCustomerModule
  ]
})


export class AdminModule {
}
