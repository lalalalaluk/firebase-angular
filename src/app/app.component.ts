import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(
    private router: Router,
  ) { }


  //  按鈕按下切換頁面
  chagePage(page: string) {
    this.router.navigate([page]);
  }

}
