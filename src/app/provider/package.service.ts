import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  package1:any;
  package2:any;

  constructor() { 
    this.package1=[
      {
      speed:"25 Mbps",
      details:[
        {
          months:1,
          price:1500

        },
        {
          months:3,
          price:2500

        },
        {
          months:6,
          price:3500

        },
        {
          months:12,
          price:5500

        },
      ]
    },
    {
      speed:"50 Mbps",
      details:[
        {
          months:1,
          price:1500

        },
        {
          months:3,
          price:2500

        },
        {
          months:6,
          price:3500

        },
        {
          months:12,
          price:5500

        },
      ]
    },
    {
      speed:"75 Mbps",
      details:[
        {
          months:1,
          price:1500

        },
        {
          months:3,
          price:2500

        },
        {
          months:6,
          price:3500

        },
        {
          months:12,
          price:5500

        },
      ]
    }]
  

  this.package2=[
    {
      speed:"25 Mbps",
      details:[
        {
          months:1,
          price:1500

        },
        {
          months:3,
          price:2500

        },
        {
          months:6,
          price:3500

        },
        {
          months:12,
          price:5500

        },
      ]
    },
    {
      speed:"50 Mbps",
      details:[
        {
          months:1,
          price:1500

        },
        {
          months:3,
          price:2500

        },
        {
          months:6,
          price:3500

        },
        {
          months:12,
          price:5500

        },
      ]
    },
  
  {
    speed:"75 Mbps",
    details:[
      {
        months:1,
        price:2500

      },
      {
        months:3,
        price:3500

      },
      {
        months:6,
        price:4500

      },
      {
        months:12,
        price:7500

      },
    ]
  }]
}

  getPackage(id:any){
    if(id===1){
      return this.package1;
    }
    else return this.package2;

  }
}
