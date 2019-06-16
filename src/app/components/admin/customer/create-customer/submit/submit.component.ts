import { Component, OnInit } from '@angular/core';
import {FormDataService} from "../common/form-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {


  constructor( private dataService:FormDataService, private route:Router) {

  }

  ngOnInit() {
  }

  goBack() {
    this.route.navigate(['admin/createcustomer/companyinfo'])
  }

  submit() {
    this.dataService.submit();
    this.route.navigate(['admin/createcustomer'])
  }
}
