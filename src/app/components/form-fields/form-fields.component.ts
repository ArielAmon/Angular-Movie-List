import { Component,Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieDialogComponent } from '../add-movie-dialog/add-movie-dialog.component';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent {

  deleteWord = '';
  sendValue: string = '';
  @Output() deleteMovie:EventEmitter<string> = new EventEmitter();
  @Output() newMovie:EventEmitter<Object> = new EventEmitter();


  constructor(private dialog: MatDialog){

  }

  setWordToDelete(){
    console.log(this.deleteWord)
    this.deleteMovie.emit(this.deleteWord);
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddMovieDialogComponent, {
      data: { pageValue: this.sendValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.newMovie.emit(result);

    });



  }
}
