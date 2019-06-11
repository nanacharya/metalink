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
        iconCls:"mdi mdi-home",
        childMenu: [
        
        ]
      },
      {
        id: 2,
        menuText: "Customers",
        collapseId: "customersCollapse",
        iconCls:"mdi mdi-home",
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
        iconCls:"mdi mdi-home",
        childMenu: [
                 ]
      },
      {
        id: 1,
        menuText: "Locations",
        route: "./location",
        iconCls:"mdi mdi-location_on",
        childMenu: [
         
        ]
      },
      {
        id: 1,
        menuText: "Support",
        route: "./support",
        iconCls:"mdi mdi-ring_volume",
        childMenu: [
          
        ]
      },
      {
        id: 1,
        menuText: "Finance",
        route: "",
        iconCls:"mdi mdi-money",
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
        iconCls:"mdi mdi-fiber_new",
        childMenu: [
         
        ]
      },
      {
        id: 1,
        menuText: "Prospects",
        route: "prospect",
        iconCls:"mdi mdi-device_hub",
        childMenu: [
         
        ]
      },
      {
        id: 1,
        menuText: "Map",
        route: "./map",
        iconCls:"mdi mdi-place",
        childMenu: [
          
        ]
      },
      {
        id: 1,
        menuText: "Document",
        iconCls:"mdi mdi-file_copy",
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
