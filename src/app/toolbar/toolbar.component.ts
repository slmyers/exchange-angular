import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  elapsedTime = 0;
  elapsedMins = 0;
  elapsedSecs = 0;
  time = {
    over: false,
    under: true
  };

  constructor() { }

  ngOnInit() {
    setInterval(
      () => {
        this.elapsedTime += 1;
        this.elapsedMins = Math.floor(this.elapsedTime / 60);
        this.elapsedSecs = this.elapsedTime % 60;
        if (this.elapsedMins >= 20) {
          this.time = {
            over: true,
            under: false
          };
        }
      },  1000);
  }

}
