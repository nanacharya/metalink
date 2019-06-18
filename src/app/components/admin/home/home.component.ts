import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'ml-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  locations: any;
  value: any;

  constructor() {
    //get location form backend
    this.locations=[
      {
        name:'hub pvt.ltd Decature Ga',
        code:'2023'
      },
      {
        name:'Umler pvt.ltd Decature Ga',
        code:'2123'
      },
      {
        name:'Tamko pvt.ltd Decature Ga',
        code:'1123'
      },

    ]
  }

  ngOnInit() {
  }


  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<string[]>) {
    debugger;
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
