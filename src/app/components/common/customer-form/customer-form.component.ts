import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../model/user-model';

@Component({
  selector: 'ml-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  user: UserModel;
  formHeader:any;

  constructor() {
  }

  ngOnInit() {
    this.user = new UserModel();
    this.formHeader="Add User"

  }

}
