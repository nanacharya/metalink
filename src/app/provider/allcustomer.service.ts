import { Injectable } from '@angular/core';
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


}
