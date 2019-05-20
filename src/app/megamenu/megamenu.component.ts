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
        route:"/services"
        
      },
      {
        id:1,
        text:"Support",
        menuLevel:0,
        route:"/support"
        
      },
      {
        id:2,
        text:"Bill & Payment",
        menuLevel:0,
        route:"/billpayment"
        
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
        route:"/company"
        
      },
      {
        id:5,
        text:"Career",
        menuLevel:0,
        route:"/career"
        
      },
      {
        id:6,
        text:"Contact",
        menuLevel:0,
        route:"/contact"
        
      },
    ]
   }

  ngOnInit() {
  }

}
