import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'ml-dashboardbanner',
  templateUrl: './dashboardbanner.component.html',
  styleUrls: ['./dashboardbanner.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardbannerComponent implements OnInit {

  hidefirst:true;
  public carouselTileItems:any;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg:1, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };
  
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.carouselTileItems=[
      {
        imgSrc:`https://picsum.photos/900/500?random&t=${Math.random()}`,
        header:'Welcome to University',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses',
        link:"https://picsum.photos/900/500?random&t=${Math.random()}"

      

      },
      {
        imgSrc:`https://picsum.photos/900/500?random&t=${Math.random()}`,
        header:'Admission open 2018',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'Admission',
        link:"https://picsum.photos/900/500?random&t=${Math.random()}"


      },
      {
        imgSrc:`https://picsum.photos/900/500?random&t=${Math.random()}`,
        header:'Education Master',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses',
        link:"https://picsum.photos/900/500?random&t=${Math.random()}"


      },
      {
        imgSrc:`https://picsum.photos/900/500?random&t=${Math.random()}`,
        header:'Education Master',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses',
        link:"https://picsum.photos/900/500?random&t=${Math.random()}"


      },

      {
        imgSrc:`https://picsum.photos/900/500?random&t=${Math.random()}`,
        header:'Education Master',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses',
        link:"https://picsum.photos/900/500?random&t=${Math.random()}"


      },
      {
        imgSrc:`https://picsum.photos/900/500?random&t=${Math.random()}`,
        header:'Education Master',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses',
        link:"https://picsum.photos/900/500?random&t=${Math.random()}"


      },
      {
        imgSrc:`https://picsum.photos/900/500?random&t=${Math.random()}`,
        header:'Education Master',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses',
        link:"https://picsum.photos/900/500?random&t=${Math.random()}"


      },
      {
        imgSrc:`https://picsum.photos/900/500?random&t=${Math.random()}`,
        header:'Education Master',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        ctaInfo:'All Courses',
        link:"https://picsum.photos/900/500?random&t=${Math.random()}"


      }
    ]
  }

}
