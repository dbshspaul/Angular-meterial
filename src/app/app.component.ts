import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  myControl: FormControl = new FormControl();
  selectedValue: any;

  options = [
    'One',
    'Two',
    'Three'
  ];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'pizza-2', viewValue: 'Pizza1'},
    {value: 'pizza-3', viewValue: 'Pizza2'},
    {value: 'pizza-4', viewValue: 'Pizza3'},
    {value: 'pizza,-5', viewValue: 'Pizza4'},
    {value: 'pizza-6', viewValue: 'Pizza5'},
    {value: 'pizza-7', viewValue: 'Pizza6'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.options.slice());
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onBtnClick() {
    this.selectedValue.map(item => alert(item));
  }
}
