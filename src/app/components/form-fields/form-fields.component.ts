import { Component } from '@angular/core';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent {
  deleteWord = '';
  //isBusy= false;
  printWord() {
    console.log(this.deleteWord);
  }
  openAddDialog() {}
}
