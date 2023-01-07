import { Component, Input } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  geners: string;
  year: number;
  length: string;
  rank: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Avangers',
    geners: 'Action',
    year: 2020,
    length: '1:40',
    rank: 9.9,
  },
  {
    position: 2,
    name: 'Inception',
    geners: 'Thriller',
    year: 2018,
    length: '1:20',
    rank: 7.5,
  },
  {
    position: 3,
    name: 'Avatar',
    geners: 'Sci-fi',
    year: 2014,
    length: '2:30',
    rank: 7.9,
  },
  {
    position: 4,
    name: 'Killer',
    geners: 'horror',
    year: 2013,
    length: '1:40',
    rank: 8.9,
  },
];

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent {
  @Input() test: any;
  displayedColumns: string[] = [
    'position',
    'name',
    'geners',
    'year',
    'length',
    'rank',
  ];
  dataSource = ELEMENT_DATA;
}
