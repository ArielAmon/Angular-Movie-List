import { NgModule } from '@angular/core';
import {MatButtonModule,} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


const MaterialComponnets = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatInputModule
];


@NgModule({
  imports: [MaterialComponnets],
  exports:[MaterialComponnets]
})
export class MaterialModule { }
