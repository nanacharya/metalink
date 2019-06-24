import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'ml-address-form-component',
  templateUrl: './address-form-component.component.html',
  styleUrls: ['./address-form-component.component.scss']
})
export class AddressFormComponentComponent implements OnInit {

  constructor( private fb:FormBuilder) { }

  ngOnInit() {
  }

}
