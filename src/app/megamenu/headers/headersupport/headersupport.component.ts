import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ml-headersupport',
  templateUrl: './headersupport.component.html',
  styleUrls: ['./headersupport.component.scss']
})
export class HeadersupportComponent implements OnInit {

  title: string = 'FIND US';
  lat: number;
  lng: number;

  constructor() {

  }

  ngOnInit() {

    if (navigator.geolocation) {

      this.lat = 51.678418;
      this.lng = 7.809007;
    //  let cord = navigator.geolocation.watchPosition(this.showPosition);
      //  this.lat = cord.split("-")[0];
    } else {
      this.lat = 51.678418;
      this.lng = 7.809007;
    }
  }

  showPosition(position) {
    debugger;
    console.log(position);
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    // return lat + "-" + lng;
  }


}
