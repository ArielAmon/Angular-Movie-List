import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-add-movie-dialog',
  templateUrl: './add-movie-dialog.component.html',
  styleUrls: ['./add-movie-dialog.component.scss']
})
export class AddMovieDialogComponent implements OnInit{

  data = {};
  generesList = ["Action","Comedy"
  ,"Drama"
  ,"Fantasy"
  ,"Horror"
  ,"Mystery"
  ,"Romance"
  ,"Thriller"
  ,"Western"];

  movieForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private dialogRef: MatDialogRef<AddMovieDialogComponent>){ }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      movieName : ['', Validators.required],
      movieGenere : ['', Validators.required],
      movieYear : ['', Validators.required],
      movieLength : ['', Validators.required],
      movieRank : ['', Validators.required],
    })
  }
  addMovie(){
    console.log("IN HERE",this.movieForm.value);
    this.dialogRef.close({ data: this.movieForm.value });
  }

}
