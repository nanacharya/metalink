import {Component, OnInit} from '@angular/core';
import {Address} from "../common/form-data-module";
import {FormDataService} from "../common/form-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit {

  address: Address;

  constructor(private  dataService: FormDataService, private route: Router) {

    this.address = dataService.getAddress();

  }

  ngOnInit() {
  }

  privious() {
    this.dataService.setAddress(this.address);
    this.route.navigate(['admin/createcustomer/yourinfo'])
  }

  nextButton() {
    this.dataService.setAddress(this.address);
    this.route.navigate(['admin/createcustomer/companyinfo'])
  }
}
