import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>Hello</h1>
    <nav>
      <a routerLink=""> Главная </a>
      <a routerLink="/about"> О нас </a>
      <a routerLink="/news"> Новости </a>
      <a routerLink="/help"> Помощь </a>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
}
