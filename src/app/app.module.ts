import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { DashboardbannerComponent } from './components/dashboardbanner/dashboardbanner.component';
import { NguCarouselModule } from '@ngu/carousel';
import {NgbModule, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { PackagedetailsComponent } from './components/packagedetails/packagedetails.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import {HeaderservicesComponent} from './megamenu/headers/headerservices/headerservices.component';
import { HeadersupportComponent } from './megamenu/headers/headersupport/headersupport.component';
import { HeaderbillpaymentComponent } from './megamenu/headers/headerbillpayment/headerbillpayment.component';
import { HeaderonlineserviceComponent } from './megamenu/headers/headeronlineservice/headeronlineservice.component';
import { HeadercompanyComponent } from './megamenu/headers/headercompany/headercompany.component';
import { HeadercarrerComponent } from './megamenu/headers/headercarrer/headercarrer.component';
import { HeadercontactComponent } from './megamenu/headers/headercontact/headercontact.component';
import {Routes,RouterModule} from '@angular/router';
import { HeaderhomeComponent } from './megamenu/headers/headerhome/headerhome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminModule } from './components/admin/admin.module';

const routes:Routes=[
  {path:'' , component:HeaderhomeComponent},
  {path:'services' , component:HeaderservicesComponent},
  {path:'support' , component:HeadersupportComponent},
  {path:'onlineservices' , component:HeaderonlineserviceComponent},
  {path:'company' , component:HeadercompanyComponent},
  {path:'career' , component:HeadercarrerComponent},
  {path:'contact' , component:HeadercontactComponent},
  {path:'billpayment' , component:HeaderbillpaymentComponent},

  {path:'**' , component:NotfoundComponent}



]

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



  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
