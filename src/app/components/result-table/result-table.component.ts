import { Component, Input,  OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent implements OnInit , OnChanges{


  constructor(){ }

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
}

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
  
}


}
