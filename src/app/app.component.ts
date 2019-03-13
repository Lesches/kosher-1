import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rests: Restaurant[];


      __constructor(){

    this.rests = [];
    let   temp = new Restaurant();
    temp.name = 'Tav Cafe';
    temp.phone = '(514) 112-3581';
    temp.rating = 3;
    temp.priceRange = 3;
    temp. website = 'http://cafetav.com/';
    this.rests.push(temp);

    let  r1 = new Restaurant();
    r1.name = 'Pizza Pita';
    r1.phone = '(514) 234-1111';
    r1.rating = 4;
    r1.priceRange = 4;

    this.rests.push(r1);

   let r2 = new Restaurant();
    r2.name = 'Trump Tower';
    r2.phone = '(514) 112-3581';
    r2.rating = 3;
    r2.priceRange = 3;
    r2. website = 'http://cafetav.com/';
    this.rests.push(r2);

   let  r3 = new Restaurant();
    r3.name = 'Milk and Honey';
    r3.phone = '(514) 112-3581';
    r3.rating = 3;
    r3.priceRange = 3;

    this.rests.push(r3);

  }
}
