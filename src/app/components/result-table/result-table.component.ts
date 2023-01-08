import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent implements OnInit  {

  // implement on change to get data from main block about new data

  constructor(){ }

  @Input() newData: Object = {};
  @Input() movieList: Object[] = [];

  displayedColumns: string[] = [
    'name',
    'geners',
    'year',
    'length',
    'rank',
  ];



ngOnInit(): void {
  console.log(this.movieList);
  console.log(this.newData);
}

addNewMovie(){
  console.log(this.newData);
}



}
