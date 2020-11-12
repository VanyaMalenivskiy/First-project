import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  options:string[];

  ngOnInit() {
    this.options = [];
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOption(index: number): void {
    this.options.splice(index, 1);
  }

  constructor() {
  }

}
