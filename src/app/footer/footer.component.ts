import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ml-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

showform:boolean;

  form= new FormGroup({
  'name':new FormControl("",[]),
  'email':new FormControl("",[Validators.required,Validators.email]),
  'subject':new FormControl("",[]),
  'message':new FormControl("",[]),


  })

  constructor() { }

  ngOnInit() {
    this.showform=false;
  }

get email(){
  return this.form.get("email");
}
  submitForm(){
    console.log(this.form.value)
  }

  showForm(value){
    this.showform=value;
  }
}
