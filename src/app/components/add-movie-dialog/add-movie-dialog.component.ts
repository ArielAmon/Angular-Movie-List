import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-movie-dialog',
  templateUrl: './add-movie-dialog.component.html',
  styleUrls: ['./add-movie-dialog.component.scss'],
})
export class AddMovieDialogComponent implements OnInit {
  data = {};
  generesList = [
    'Action',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Thriller',
    'Western',
  ];

  movieForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddMovieDialogComponent>
  ) {}

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      geners: ['', Validators.required],
      year: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.min(1950),
          Validators.max(new Date().getFullYear()),
        ],
      ],
      length: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.min(10),
          Validators.max(300),
        ],
      ],
      rank: ['', Validators.required],
    });
  }
  addMovie() {
    console.log('IN HERE', this.movieForm.value);
    this.dialogRef.close(this.movieForm.value);
  }
}
