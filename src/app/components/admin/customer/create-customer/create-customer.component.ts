import {Component, Input, OnInit} from '@angular/core';
import {FormDataService} from "./common/form-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {


  @Input() formData;
  start: boolean;

  constructor(private formDataService: FormDataService, private router: Router) {

    this.formData = formDataService.getFormData();
    this.start = true;
  }

  ngOnInit() {
    //  this.formValue = this.formData;
  }

  startForm() {
    this.start = false;
    this.router.navigate(['admin/createcustomer/yourinfo']);
  }
}
