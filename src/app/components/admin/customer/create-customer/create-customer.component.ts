import {Component, Input, OnInit} from '@angular/core';
import {FormDataService} from "./common/form-data.service";

@Component({
  selector: 'ml-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {


  @Input() formData;

  constructor(private formDataService: FormDataService) {

    this.formData = formDataService.getFormData();
  }

  ngOnInit() {
    //  this.formValue = this.formData;
  }

}
