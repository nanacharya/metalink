import { Component, OnInit } from '@angular/core';
import { NgbAccordion, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ml-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:[NgbAccordion]
})
export class AdminComponent implements OnInit {

  adminMenu: any;

  constructor(config:NgbAccordionConfig) {
    config.closeOthers=true;
  //  config.type='info';

    this.adminMenu = [
      {
        id: 1,
        menuText: "Home",
        collapseId: "homeCollapse",
        route: "./home",
        childMenu: [
        
        ]
      },
      {
        id: 2,
        menuText: "Customers",
        collapseId: "customersCollapse",
        route: "",
        childMenu: [
          {
            menuText: "All Customers",
            route: "./allcustomer"
          },
          {
            menuText: "Create Customers",
            route: "./createcustomer"
          },
          {
            menuText: "Active Customers",
            route: "./activecustomer"
          },
          {
            menuText: "Expired Customers",
            route: "./expiredcustomer"
          },
          {
            menuText: "Expiring Customers",
            route: "./expiringcustomer"
          },
          {
            menuText: "Disabled Customers",
            route: "./disbledcustomer"
          },
          {
            menuText: "Expired VIP",
            route: "./expiredvip"
          },
        ]
      },
      {
        id: 3,
        menuText: "Profile",
        route: "./profile",
        childMenu: [
                 ]
      },
      {
        id: 1,
        menuText: "Locations",
        route: "./location",
        childMenu: [
         
        ]
      },
      {
        id: 1,
        menuText: "Support",
        route: "./support",
        childMenu: [
          
        ]
      },
      {
        id: 1,
        menuText: "Finance",
        route: "",
        childMenu: [
          {
            menuText: "Send Money",
            route: "./send"
          },
          {
            menuText: "Cancel Money",
            route: "./send"
          }
        ]
      },
      {
        id: 1,
        menuText: "Fiber",
        route: "./fiber",
        childMenu: [
         
        ]
      },
      {
        id: 1,
        menuText: "Prospects",
        route: "prospect",
        childMenu: [
         
        ]
      },
      {
        id: 1,
        menuText: "Map",
        route: "./map",
        childMenu: [
          
        ]
      },
      {
        id: 1,
        menuText: "Document",
        route: "",
        childMenu: [
          {
            menuText: "Upload Document",
            route: "./document"
          },
          {
            menuText: "DownLoad Document",
            route: "./downLoad"
          }
        ]
      }
    ]
  }

  ngOnInit() {
  }


}
