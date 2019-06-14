import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateCustomerComponent} from "./create-customer.component";
import {YourInfoComponent} from './your-info/your-info.component';
import {AddressInfoComponent} from './address-info/address-info.component';
import {CompanyInfoComponent} from './company-info/company-info.component';
import {SubmitComponent} from './submit/submit.component';
import {CreateCustNavbarComponent} from './create-cust-navbar/create-cust-navbar.component';
import {FormsModule} from "@angular/forms";


const createCustomer: Routes = [
  {
    path: "createcustomer", component: CreateCustomerComponent,
    children: [
      {path: "yourinfo", component: YourInfoComponent},
      {path: "addressinfo", component: AddressInfoComponent},
      {path: "companyinfo", component: CompanyInfoComponent},
      {path: "submit", component: SubmitComponent},
    ]
  }
];

@NgModule({
  declarations: [YourInfoComponent, AddressInfoComponent, CompanyInfoComponent, SubmitComponent,
    CreateCustNavbarComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(createCustomer),
    FormsModule,


  ]
})

export class CreateCustomerModule {
}
