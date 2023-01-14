import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { PopUpComponent } from '../pop-up/pop-up.component';

let ELEMENT_DATA: Movie[]= [

];

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.scss'],
})
export class MainBlockComponent implements OnInit{

  constructor(public dialog: MatDialog, public api: ApiService) {}

  dataSource:Movie[] = ELEMENT_DATA;
  message: string = '';


  ngOnInit(): void {
    this.sort();
  }

  getMovieName(name:any){
    console.log("Got to main !",name);
    if (this.dataSource.some(movie => movie.name === name)) {
      this.message = '';
      this.RemoveMovie(name);
        this.dataSource = [...this.dataSource];
    }
    else{
        this.openPopup();
    }

  }

  openPopup(){
    this.message = "Sorry, Movie not found";
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: { errorMessage: this.message}
    });
  }

  getNewMovieData(data:any){
    console.log("Got to main !",data);
    if(data){
    this.dataSource = [data, ...this.dataSource];
    this.sort();
    console.log("after new pushed !",this.dataSource);
    }
  }

  sort(){
    this.dataSource = this.dataSource.sort((a, b) => (a.rank > b.rank) ? -1 : 1);
  }

   RemoveMovie(key: string) {
    this.dataSource.forEach((value,index)=>{
        if(value.name==key) this.dataSource.splice(index,1);
    });
}


}
