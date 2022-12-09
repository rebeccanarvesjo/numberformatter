import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formattedNumber: any;
  separator: any;
  inputNumber: any;

  constructor() {
    this.separator = 2;
    this.inputNumber = '';
  }

  formatNumber() {
    let displayArray: string[] = [];
    let cleanedStr: string = '';

    if (this.inputNumber.length != 0) {
      cleanedStr = this.inputNumber.replace(/[^a-zA-Z0-9 ]/g, '');
    }

    let numArray = [...cleanedStr];

    const stringLength = numArray.length;

    let currElem = '';

    for (let i: number = 0; i <= stringLength; i += 2) {
      if (this.separator == 5) {
        break;
      }

      if (numArray.length >= this.separator) {
        currElem += numArray.splice(0, this.separator).join('');
        displayArray.push(currElem);
        currElem = '';
      }
    }
    if (this.separator != 5) {
      if (numArray.length > 0) {
        let lastSplice = numArray.splice(0, numArray.length).join('');
        displayArray.push(lastSplice);
      }
    }

    if (this.separator == 5) {
      for (let i = numArray.length; i > 0; i--) {
        if (numArray.length < 3) {
          let lastSlice = numArray.splice(0, numArray.length).join('');
          displayArray.splice(0, 0, lastSlice);
          break;
        } else {
          let slice1 = numArray.splice(-3, 3).join('');
          displayArray.splice(0, 0, slice1);
        }
      }
    }

    this.formattedNumber = displayArray;
  }
  title = 'Number Formatter';
}
