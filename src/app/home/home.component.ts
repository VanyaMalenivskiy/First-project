import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

   items = [];
   newTask;

  addToList() {
    if (this.newTask === '') {
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

    deleteTask(index) {
    this.items.splice(index, 1);
  }


  ngOnInit() {
  }
}
