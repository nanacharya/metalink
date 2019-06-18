import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {

  }

  login(data) {
    console.log(data);
    return this.httpClient.post("http://localhost:9090/login", data)
  }
}
