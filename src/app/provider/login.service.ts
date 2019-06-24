import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogged: boolean;

  constructor(private httpClient: HttpClient) {
    this.isLogged = false;
  }

  login(data) {
    console.log(data);
    return this.httpClient.post("http://localhost:9090/adminLogin", data)
  }

  setLoggedIn(value) {
    this.isLogged = value;
  }

  get isLoggedIn() {
    return this.isLogged;
  }

  userLogin(data: any) {
    return this.httpClient.post("http://localhost:9090/userLogin", data)
  }
}
