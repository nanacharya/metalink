import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../model/user-model';

@Component({
  selector: 'ml-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  user: UserModel;

  constructor() {
  }

  ngOnInit() {
    if (sessionStorage.getItem('customer')) {
      this.user = <UserModel> JSON.parse(sessionStorage.getItem('customer'));
    } else {
      this.user = new UserModel();
    }
  }

  updateContact() {

  }

  updateSsid() {

  }
}
