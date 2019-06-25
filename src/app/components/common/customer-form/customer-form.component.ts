import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../model/user-model';
import {AllcustomerService} from '../../../provider/allcustomer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ml-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  user: UserModel;
  formHeader: any;

  constructor(private service: AllcustomerService, private router: Router) {
  }

  ngOnInit() {
    this.user = new UserModel();
    this.formHeader = 'Add User';
    if (sessionStorage.getItem('customer')) {
      this.user = <UserModel> JSON.parse(sessionStorage.getItem('customer'));
      this.formHeader = 'Update User';
    }

  }

  updateOrAdduser() {
    // this.formHeader = 'Update User'?
    debugger;
    console.log(this.user);
    this.service.updateOrAddUser(this.user).subscribe(response => {
      console.log(response);

    });

  }

  cancel() {

    this.router.navigate(['customer/home']);
  }

  setImage(files: any) {
    debugger;
    var reader = new FileReader();
    reader.readAsDataURL(files.files[0]);
    reader.onload = (evnet) => {
      debugger;
      this.user.customerimage = reader.result;
    };


  }
}
