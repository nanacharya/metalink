import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-headersupport',
  templateUrl: './headersupport.component.html',
  styleUrls: ['./headersupport.component.scss']
})
export class HeadersupportComponent implements OnInit {

  title: string = 'FIND US';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {

  }

  ngOnInit() {
  }


}
