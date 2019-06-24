import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MlCustomerComponent} from './customer.component';
import {MatExpansionModule, MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { ChangePasswordComponent } from './online-services/change-password/change-password.component';
import { CheckYourEmailComponent } from './online-services/check-your-email/check-your-email.component';
import { ContactUpdateComponent } from './online-services/contact-update/contact-update.component';
import { ViewUsesGraphComponent } from './online-services/view-uses-graph/view-uses-graph.component';
import { CheckInternetGraphComponent } from './online-services/check-internet-graph/check-internet-graph.component';
import { ActiveDeviceComponent } from './online-services/active-device/active-device.component';
import { BandwidthSelectorComponent } from './online-services/bandwidth-selector/bandwidth-selector.component';
import { PaymentHistoryComponent } from './accounting-service/payment-history/payment-history.component';
import { ServicePlanHistoryComponent } from './accounting-service/service-plan-history/service-plan-history.component';
import { CheckAccountStatusComponent } from './accounting-service/check-account-status/check-account-status.component';
import { EPaymentComponent } from './accounting-service/e-payment/e-payment.component';
import { ViewEPaymentHistoryComponent } from './accounting-service/view-epayment-history/view-epayment-history.component';
import { ReportTroubleTicketComponent } from './support-issue/report-trouble-ticket/report-trouble-ticket.component';
import { TicketStatusComponent } from './support-issue/ticket-status/ticket-status.component';
import { FaqsComponent } from './support-issue/faqs/faqs.component';

@NgModule({
  declarations: [ChangePasswordComponent, CheckYourEmailComponent, ContactUpdateComponent, ViewUsesGraphComponent, CheckInternetGraphComponent, ActiveDeviceComponent, BandwidthSelectorComponent, PaymentHistoryComponent, ServicePlanHistoryComponent, CheckAccountStatusComponent, EPaymentComponent, ViewEPaymentHistoryComponent, ReportTroubleTicketComponent, TicketStatusComponent, FaqsComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule
  ]
})
export class CustomerModule {

}
