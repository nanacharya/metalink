import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent implements OnInit {

  menuItems:any;
  constructor() {
    this.menuItems=[
      {
        id:0,
        text:"Services",
        menuLevel:0,
        route:"/services",
        hidden:"false"

      },
      {
        id:1,
        text:"Support",
        menuLevel:0,
        route:"/support",
        hidden:"false"


      },
      {
        id:2,
        text:"Bill & Payment",
        menuLevel:0,
        route:"/billpayment",
        hidden:"false"

      },
      {
        id:3,
        text:"Online Services",
        menuLevel:0,
        route:"/onlineservices"

      },
      {
        id:4,
        text:"Company",
        menuLevel:0,
        route:"/company",
        hidden:"false"

      },
      {
        id:5,
        text:"Career",
        menuLevel:0,
        route:"/career",
        hidden:"false"

      },
      {
        id:6,
        text:"Admin Login",
        menuLevel:0,
        route:"/admin",
        hidden:"false"

      },
      {
        id:7,
        text:"Contact",
        menuLevel:0,
        route:"/contact",
        hidden:"false"

      },
    ]
   }

  ngOnInit() {
  }

}
