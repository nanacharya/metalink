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





@NgModule({
  declarations: [
    AppComponent,
    MegamenuComponent,
    DashboardbannerComponent,
    PackagedetailsComponent,
    FooterComponent,
    LoginpageComponent,


  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
