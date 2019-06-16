import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllcustomerService {

  constructor(private httpClient: HttpClient) {

  }

  getTestData() {
    return this.httpClient.get('https://api.myjson.com/bins/15psn9');
  }

//add user to the database...
  submitData(data) {
    // return this.httpClient.post("http://localhost:3000/api/addUser" ,data);
    return this.httpClient.post("http://localhost:8080/addUser", data);
  }

  getAllUser() {
    return this.httpClient.get("http://localhost:8080/getAllUser");
  }
}
