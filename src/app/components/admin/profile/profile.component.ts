import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Validator} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'ml-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'address': new FormGroup({
        'street': new FormControl('', Validators.required),
        'housenumber': new FormControl('', [Validators.required, Validators.pattern(/\d+/g)]),
        'city': new FormControl('', Validators.required),
        'zipcode': new FormControl('', [Validators.required, Validators.pattern(/\d+/g)])
      })
    });
  }


  save() {
    console.log(this.form.value);
  }
}
