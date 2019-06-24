import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllcustomerService {

  url: any;

  constructor(private httpClient: HttpClient) {

    this.url = 'http://localhost:9090/addUser';
  }

  getTestData() {
    return this.httpClient.get('https://api.myjson.com/bins/15psn9');
  }

//add user to the database...
  submitData(data) {
    // return this.httpClient.post("http://localhost:3000/api/addUser" ,data);
    return this.httpClient.post('http://localhost:9090/addUser', data);
  }

  getAllUser() {
    return this.httpClient.get('http://localhost:9090/getAllUser');
  }
}
