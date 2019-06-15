import {Injectable} from '@angular/core';
import {Address, CompanyInfo, FormModal, Personal} from "./form-data-module";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private formModal: FormModal = new FormModal();

  constructor() {
  }

  getFormData() {
    return this.formModal;
  }

  getPersonal(): Personal {
    return {
      firstname: this.formModal.firstname,
      lastname: this.formModal.lastname,
      dob: this.formModal.dob
    };
  }

  setPersonalData(personal: Personal) {
    this.formModal.firstname = personal.firstname;
    this.formModal.lastname = personal.lastname;
    this.formModal.dob = personal.dob;

  }

  setAddress(address: Address) {
    this.formModal.state = address.state;
    this.formModal.city = address.city;
    this.formModal.zip = address.zip;

  }

  getAddress(): Address {
    return {
      state: this.formModal.state,
      city: this.formModal.city,
      zip: this.formModal.zip,
    };
  }

  setCompany(company: CompanyInfo) {
    this.formModal.comapanyaddress = company.comapanyaddress;
    this.formModal.comapnyname = company.comapnyname;

  }

  getCompany(): CompanyInfo {
    return {
      comapanyaddress: this.formModal.comapanyaddress,
      comapnyname: this.formModal.comapnyname,
    };
  }

  submit() {
    console.log(this.formModal);
  }
}
