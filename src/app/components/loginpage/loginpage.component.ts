import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from "../../provider/login.service";

@Component({
  selector: 'ml-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginType: string;
  isLoginSuccess: boolean;

  loginForm = new FormGroup({
    'username': new FormControl('', []),
    'password': new FormControl('', [])
  });

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private loginService: LoginService) {

    this.isLoginSuccess = true;
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      params.type === 'admin' ? this.loginType = 'Admin Login' : this.loginType = 'User Login';

    });

  }

  submitlog() {
    console.log(this.loginForm.value);

    this.loginService.login(this.loginForm.value).subscribe(response => {
      debugger;
      console.log(response);
      console.log(response["entity"]);
      if (response["entity"]) {
        this.router.navigate(['/admin', 'user']);
      } else {
        this.isLoginSuccess = false;

        setTimeout(() => {
          this.isLoginSuccess = true;
        }, 3000)
      }
    });
  }

}
