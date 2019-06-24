import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-exception-widget',
  templateUrl: './exception-widget.component.html',
  styleUrls: ['./exception-widget.component.scss']
})
export class ExceptionWidgetComponent implements OnInit {

  foods: [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
    ];

  public exceptions: any = {
    labels: ['No Bills - 250', 'Demurrage - 80', 'Bad Orders - 200', 'Overloads - 303'],
    datasets: [
      {
        data: [250, 80, 200, 303],
        backgroundColor: [
          '#F4BA05',
          '#2C2D28',
          '#969696',
          '#C8C8C9'
        ]
      }]
  };
  public options = {
    title: {
      display: false,
      text: '209',
      position: 'top',
      padding: 30
    },
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true
      }
    }
  };



  constructor() { }

  ngOnInit() {
  }

}
