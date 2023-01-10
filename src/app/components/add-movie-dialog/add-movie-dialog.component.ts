import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";


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
      name : ['', Validators.required],
      geners : ['', Validators.required],
      year : ['', Validators.required],
      length : ['', Validators.required],
      rank : ['', Validators.required],
    })
  }
  addMovie(){
    console.log("IN HERE",this.movieForm.value);
    this.dialogRef.close(this.movieForm.value );
  }

}
