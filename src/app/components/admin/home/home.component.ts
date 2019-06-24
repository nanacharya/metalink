import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'ml-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
