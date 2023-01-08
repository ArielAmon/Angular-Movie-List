import { Component, Input } from '@angular/core';

// export interface PeriodicElement {

//   name: string;
//   geners: string;
//   year: number;
//   length: string;
//   rank: number;
// }

let ELEMENT_DATA: Object[] = [
  {
    name: 'Avangers',
    geners: 'Action',
    year: 2020,
    length: '1:40',
    rank: 9.9,
  },
  {
    name: 'Inception',
    geners: 'Thriller',
    year: 2018,
    length: '1:20',
    rank: 7.5,
  },
  {
    name: 'Avatar',
    geners: 'Sci-fi',
    year: 2014,
    length: '2:30',
    rank: 7.9,
  },
  {
    name: 'Killer',
    geners: 'horror',
    year: 2013,
    length: '1:40',
    rank: 8.9,
  },
];

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.scss'],
})
export class MainBlockComponent {
  dataSource = ELEMENT_DATA;
  newMovie={};

  getMovieName(name:any){
    console.log("Got to main !",name);
  }

  getNewMovieData(data:Object){
    console.log("Got to main !",data);
    this.newMovie = data;
    this.dataSource.push(data);
    this.newMovie={};
  }




}
