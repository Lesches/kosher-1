import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kosher';
  subtitle = 'This is a card';
  body = 'whatever';

  // init method
  ngOnInit(): void{
    this.title = 'WORD!!!';
  }

}
