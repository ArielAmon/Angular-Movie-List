import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.scss'],
})
export class MainBlockComponent implements OnInit {
  constructor(public dialog: MatDialog, public api: ApiService) {}

  dataSource: Movie[] = [];
  message: string = '';

  ngOnInit(): void {
    this.api.getAllMovies().subscribe((response: any) => {
      console.log(response);
      this.dataSource = response;
      this.sort();
    });
  }

  getMovieName(name: any) {
    console.log('Got to main !', name);
    this.message = '';
    this.api.deleteMovie(name).subscribe((response: any) => {
      console.log('respone of DB to delete : ', response);

      if (response === 'Movie has been deleted from your list') {
        this.dataSource.forEach((value, index) => {
          if (value.name == name) this.dataSource.splice(index, 1);
        });
        this.dataSource = [...this.dataSource];
        console.log('local = after movie deleted !', this.dataSource);

        setTimeout(() => {
          this.api.getAllMovies().subscribe((response: any) => {
            console.log('DB after delete :', response);
          });
        }, 2000);
      }
      this.showPopupMessage(response);
    });
  }

  getNewMovieData(data: any) {
    console.log('Got to main !', data);
    if (data) {
      this.api.addMovie(data).subscribe((response: any) => {
        console.log('respone of DB to adding : ', response);

        if (response === 'Movie added to your List') {
          this.dataSource = [data, ...this.dataSource];
          this.sort();
          console.log('local = after movie added !', this.dataSource);
          setTimeout(() => {
            this.api.getAllMovies().subscribe((response: any) => {
              console.log('DB after add :', response);
            });
          }, 2000);
        }
        this.showPopupMessage(response);
      });
    }
  }

  sort() {
    this.dataSource = this.dataSource.sort((a, b) =>
      a.rank > b.rank ? -1 : 1
    );
  }

  showPopupMessage(response: any) {
    this.message = response;
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: { errorMessage: this.message },
    });
  }
}
