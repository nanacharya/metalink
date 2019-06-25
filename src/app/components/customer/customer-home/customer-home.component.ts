import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../model/user-model';
import {Router} from '@angular/router';

@Component({
  selector: 'ml-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  user: UserModel;

  constructor(private route: Router) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('customer')) {
      this.user = <UserModel> JSON.parse(sessionStorage.getItem('customer'));
    } else {
      this.user = new UserModel();
    }
  }

  updateContact() {
    this.route.navigate(['/customer/customer-form']);
  }

  updateSsid() {

  }
}
