import {Component, OnInit} from '@angular/core';
import {Personal} from "../common/form-data-module";
import {FormDataService} from "../common/form-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ml-your-info',
  templateUrl: './your-info.component.html',
  styleUrls: ['./your-info.component.scss']
})
export class YourInfoComponent implements OnInit {

  personal: Personal;

  constructor(private formDataService: FormDataService, private router: Router) {
    this.personal = formDataService.getPersonal();
  }

  ngOnInit() {
  }

  gonext() {

    this.formDataService.setPersonalData(this.personal);
    this.router.navigate(['admin/createcustomer/addressinfo']);
    console.log(this.personal);
  }
}
