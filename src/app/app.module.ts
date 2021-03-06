import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MegamenuComponent} from './megamenu/megamenu.component';
import {DashboardbannerComponent} from './components/dashboardbanner/dashboardbanner.component';
import {NguCarouselModule} from '@ngu/carousel';
import {NgbModule, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {PackagedetailsComponent} from './components/packagedetails/packagedetails.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginpageComponent} from './components/loginpage/loginpage.component';
import {HeaderservicesComponent} from './megamenu/headers/headerservices/headerservices.component';
import {HeadersupportComponent} from './megamenu/headers/headersupport/headersupport.component';
import {HeaderbillpaymentComponent} from './megamenu/headers/headerbillpayment/headerbillpayment.component';
import {HeaderonlineserviceComponent} from './megamenu/headers/headeronlineservice/headeronlineservice.component';
import {HeadercompanyComponent} from './megamenu/headers/headercompany/headercompany.component';
import {HeadercarrerComponent} from './megamenu/headers/headercarrer/headercarrer.component';
import {HeadercontactComponent} from './megamenu/headers/headercontact/headercontact.component';
import {Routes, RouterModule} from '@angular/router';
import {HeaderhomeComponent} from './megamenu/headers/headerhome/headerhome.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {AdminComponent} from './components/admin/admin.component';
import {AdminModule} from './components/admin/admin.module';
import {AgGridModule} from 'ag-grid-angular';
import {AllcustomerService} from './provider/allcustomer.service';
import {HttpClientModule} from '@angular/common/http';

import 'ag-grid-enterprise';
import {MatButtonModule, MatExpansionModule, MatMenuModule, MatRadioModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import {CreateCustomerModule} from './components/admin/customer/create-customer/create-customer.module';
import {HomeComponent} from './components/admin/home/home.component';
import {CustomerComponent} from './components/admin/customer/customer.component';
import {ProfileComponent} from './components/admin/profile/profile.component';
import {LocationComponent} from './components/admin/location/location.component';
import {SupportComponent} from './components/admin/support/support.component';
import {FiberComponent} from './components/admin/fiber/fiber.component';
import {ProspectsComponent} from './components/admin/prospects/prospects.component';
import {MapsComponent} from './components/admin/maps/maps.component';
import {DocumentComponent} from './components/admin/document/document.component';
import {AllCustomerComponent} from './components/admin/customer/all-customer/all-customer.component';
import {CreateCustomerComponent} from './components/admin/customer/create-customer/create-customer.component';
import {YourInfoComponent} from './components/admin/customer/create-customer/your-info/your-info.component';
import {AddressInfoComponent} from './components/admin/customer/create-customer/address-info/address-info.component';
import {CompanyInfoComponent} from './components/admin/customer/create-customer/company-info/company-info.component';
import {SubmitComponent} from './components/admin/customer/create-customer/submit/submit.component';
import {ChartModule} from 'primeng/chart';
import {AuthGuard} from './authGuard/auth.guard';
import {AddressFormComponentComponent} from './components/common/address-form-component/address-form-component.component';
import {ShowHideDirective} from './cust-directives/show-hide.directive';
import {CustomerHomeComponent} from './components/customer/customer-home/customer-home.component';
import {OnlineServicesComponent} from './components/customer/online-services/online-services.component';
import {AccountingServiceComponent} from './components/customer/accounting-service/accounting-service.component';
import {ReferOffferComponent} from './components/customer/refer-offfer/refer-offfer.component';
import {SupportIssueComponent} from './components/customer/support-issue/support-issue.component';
import {LoginOptionsComponent} from './components/customer/login-options/login-options.component';
import {MlCustomerComponent} from './components/customer/customer.component';
import {ChangePasswordComponent} from './components/customer/online-services/change-password/change-password.component';
import {CheckYourEmailComponent} from './components/customer/online-services/check-your-email/check-your-email.component';
import {ContactUpdateComponent} from './components/customer/online-services/contact-update/contact-update.component';
import {ViewUsesGraphComponent} from './components/customer/online-services/view-uses-graph/view-uses-graph.component';
import {CheckInternetGraphComponent} from './components/customer/online-services/check-internet-graph/check-internet-graph.component';
import {ActiveDeviceComponent} from './components/customer/online-services/active-device/active-device.component';
import {BandwidthSelectorComponent} from './components/customer/online-services/bandwidth-selector/bandwidth-selector.component';
import {PaymentHistoryComponent} from './components/customer/accounting-service/payment-history/payment-history.component';
import {ServicePlanHistoryComponent} from './components/customer/accounting-service/service-plan-history/service-plan-history.component';
import {CheckAccountStatusComponent} from './components/customer/accounting-service/check-account-status/check-account-status.component';
import {EPaymentComponent} from './components/customer/accounting-service/e-payment/e-payment.component';
import {ViewEPaymentHistoryComponent} from './components/customer/accounting-service/view-epayment-history/view-epayment-history.component';
import {ReportTroubleTicketComponent} from './components/customer/support-issue/report-trouble-ticket/report-trouble-ticket.component';
import {TicketStatusComponent} from './components/customer/support-issue/ticket-status/ticket-status.component';
import {FaqsComponent} from './components/customer/support-issue/faqs/faqs.component';
import { CustomerFormComponent } from './components/common/customer-form/customer-form.component';

const routes: Routes = [
  {path: '', component: HeaderhomeComponent},
  {path: 'services', component: HeaderservicesComponent, canActivate: [AuthGuard]},
  {path: 'support', component: HeadercontactComponent},
  {path: 'onlineservices/:type', component: HeaderonlineserviceComponent},
  {path: 'company', component: HeadercompanyComponent},
  {path: 'career', component: HeadercarrerComponent},
  {path: 'contact', component: HeadersupportComponent},
  {path: 'billpayment', component: HeaderbillpaymentComponent},
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent, canActivateChild: [AuthGuard]},
      {path: 'customer', component: CustomerComponent, canActivateChild: [AuthGuard]},
      {path: 'profile', component: ProfileComponent},
      {path: 'location', component: LocationComponent},
      {path: 'support', component: SupportComponent},
      {path: 'finance', component: FiberComponent},
      {path: 'fiber', component: AdminComponent},
      {path: 'prospect', component: ProspectsComponent},
      {path: 'map', component: MapsComponent},
      {path: 'document', component: DocumentComponent},
      {path: 'allcustomer', component: AllCustomerComponent},
      {
        path: 'createcustomer', component: CreateCustomerComponent,
        children: [
          {path: 'yourinfo', component: YourInfoComponent},
          {path: 'addressinfo', component: AddressInfoComponent},
          {path: 'companyinfo', component: CompanyInfoComponent},
          {path: 'submit', component: SubmitComponent},
        ]
      }

    ]
  }, {
    path: 'customer', component: MlCustomerComponent,
    children: [
      {path: 'home', component: CustomerHomeComponent},
      {path: 'customer-form', component: CustomerFormComponent},

      {
        path: 'account-service', component: AccountingServiceComponent,
        children: [
          {path: 'accountHistory', component: PaymentHistoryComponent},
          {path: 'planHistory', component: ServicePlanHistoryComponent},
          {path: 'accountStatus', component: CheckAccountStatusComponent},
          {path: 'ePayment', component: EPaymentComponent},
          {path: 'ePaymentHistory', component: ViewEPaymentHistoryComponent},
        ]
      },
      {path: 'login-option', component: LoginOptionsComponent},
      {
        path: 'online-services', component: OnlineServicesComponent,
        children: [
          {path: 'changePassword', component: ChangePasswordComponent},
          {path: 'checkMail', component: CheckYourEmailComponent},
          {path: 'contactUpdate', component: ContactUpdateComponent},
          {path: 'usesGraph', component: ViewUsesGraphComponent},
          {path: 'internetUses', component: CheckInternetGraphComponent},
          {path: 'activeDevices', component: ActiveDeviceComponent},
          {path: 'bandwidth', component: BandwidthSelectorComponent},
        ]
      },
      {path: 'refer-offer', component: ReferOffferComponent},
      {
        path: 'support-issue', component: SupportIssueComponent,
        children: [
          {path: 'reportTicket', component: ReportTroubleTicketComponent},
          {path: 'ticketStatus', component: TicketStatusComponent},
          {path: 'faqs', component: FaqsComponent},
        ]
      },
    ]
  }
  ,
  {path: '**', component: NotfoundComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    MegamenuComponent,
    DashboardbannerComponent,
    PackagedetailsComponent,
    FooterComponent,
    LoginpageComponent,
    HeaderservicesComponent,
    HeadersupportComponent,
    HeaderbillpaymentComponent,
    HeaderonlineserviceComponent,
    HeadercompanyComponent,
    HeadercarrerComponent,
    HeadercontactComponent,
    HeaderhomeComponent,
    NotfoundComponent,
    AdminComponent,
    AddressFormComponentComponent,
    ShowHideDirective,
    CustomerHomeComponent,
    OnlineServicesComponent,
    AccountingServiceComponent,
    ReferOffferComponent,
    SupportIssueComponent,
    LoginOptionsComponent,
    MlCustomerComponent,
    ChangePasswordComponent,
    PaymentHistoryComponent,
    ServicePlanHistoryComponent,
    CheckAccountStatusComponent,
    EPaymentComponent,
    ViewEPaymentHistoryComponent,
    CheckYourEmailComponent,
    ContactUpdateComponent,
    ViewUsesGraphComponent,
    CheckInternetGraphComponent,
    ActiveDeviceComponent,
    BandwidthSelectorComponent,
    ReportTroubleTicketComponent,
    TicketStatusComponent,
    FaqsComponent,
    CustomerFormComponent


  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AdminModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule,
    ChartModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5MwxNX-MUEU3vHDcd8BK5KfjV4eZSv2I'
    }),
    CreateCustomerModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule
  ],
  providers: [AllcustomerService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
