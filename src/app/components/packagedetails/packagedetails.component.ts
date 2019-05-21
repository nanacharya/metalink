import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { PackageService } from 'src/app/provider/package.service';

@Component({
  selector: 'ml-packagedetails',
  templateUrl: './packagedetails.component.html',
  styleUrls: ['./packagedetails.component.scss']
})
export class PackagedetailsComponent implements OnInit {
  packages:any;
packageDetails:any;
  constructor(
    private service:PackageService
  ) {
    this.packages=[
      {
        packageid:1,
        text:"New Customer"
      }
      ,{
        packageid:2,
        text:"Existing Customer"
      }
    ]
   }

  ngOnInit() {
   this.packageDetails= this.service.getPackage(1);
   console.log(this.packageDetails);

  }

  callBackend(id){
    
 this.packageDetails=this.service.getPackage(id);
 console.log(this.packageDetails)

  }

  // from tab calling


//   callBackend(event){
//     debugger;
// console.log(event);
// let id=event.nextId.packageid;
//  this.packageDetails=this.service.getPackage(id);
//  console.log(this.packageDetails)

//   }
}
