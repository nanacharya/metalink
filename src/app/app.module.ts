import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { DashboardbannerComponent } from './components/dashboardbanner/dashboardbanner.component';
import { NguCarouselModule } from '@ngu/carousel';
import {NgbModule, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { PackagedetailsComponent } from './components/packagedetails/packagedetails.component';





@NgModule({
  declarations: [
    AppComponent,
    MegamenuComponent,
    DashboardbannerComponent,
    PackagedetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
