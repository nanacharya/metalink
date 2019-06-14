import {Component, OnInit} from '@angular/core';
import {CompanyInfo} from "../common/form-data-module";
import {Router} from "@angular/router";
import {FormDataService} from "../common/form-data.service";

@Component({
  selector: 'ml-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  company: CompanyInfo;

  constructor(private route: Router, private dataservice: FormDataService) {
    this.company = dataservice.getCompany();
  }


  ngOnInit() {
  }

  privious() {
    this.dataservice.setCompany(this.company);
    this.route.navigate(['admin/createcustomer/addressinfo'])
  }

  nextButton() {
    this.dataservice.setCompany(this.company);
    this.route.navigate(['admin/createcustomer/submit'])
  }
}
