import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ml-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginType: string;

  loginForm = new FormGroup({
    'username': new FormControl('', []),
    'password': new FormControl('', [])
  });

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      params.type === 'admin' ? this.loginType = 'Admin Login' : this.loginType = 'User Login';

    });

  }

  submitlog() {
    console.log(this.loginForm.value);
    this.router.navigate(['/admin', 'user']);
  }

}
