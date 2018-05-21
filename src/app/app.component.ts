import { Component } from '@angular/core';
import { YesOrNoService } from './yes-or-no.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
body;
  constructor(private yesOrNo:YesOrNoService){
    this.body=this.yesOrNo.getAnswer();

  }
}
