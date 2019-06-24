import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../provider/login.service';

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
    this.loginType === 'Admin Login'?this.adminLogin():this.userLogin();
    console.log(this.loginForm.value);


  }

  private adminLogin() {
    this.loginService.login(this.loginForm.value).subscribe(response => {
      if (response['entity']) {
        this.router.navigate(['/admin']);
        sessionStorage.setItem("admin", JSON.stringify(response['entity']));
        this.loginService.setLoggedIn(true);
      } else {
        this.isLoginSuccess = false;
        this.loginService.setLoggedIn(false);

        setTimeout(() => {
          this.isLoginSuccess = true;
        }, 3000);
      }
    });

  }

  private userLogin() {
    this.loginService.userLogin(this.loginForm.value).subscribe(response => {
      if (response['entity']) {
        this.router.navigate(['/customer']);
        sessionStorage.setItem("customer", JSON.stringify(response['entity']));

        this.loginService.setLoggedIn(true);
      } else {
        this.isLoginSuccess = false;
        this.loginService.setLoggedIn(false);

        setTimeout(() => {
          this.isLoginSuccess = true;
        }, 3000);
      }
    });
  }
}
