import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  img_src = '/assets/light1.png';

  chagneImg() {
    this.img_src = '/assets/light1.png';
  }

  chagneImg2() {
    this.img_src = '/assets/light2.png';
  }


}
