import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { FormFieldsComponent } from './components/form-fields/form-fields.component';
import { AddMovieDialogComponent } from './components/add-movie-dialog/add-movie-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainBlockComponent,
    ResultTableComponent,
    FormFieldsComponent,
    AddMovieDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
