import {Configuration} from './main'; 

export class App {
  constructor() {
    this.title = 'Aurelia - Binding Behavior';

    this.currentDate = new Date();
    this.myCurrency = '£';
    this.myCurrencyValue = 999.99;//Math.random() * 1000

    this.throttle_title = 'Throttle';
    this.myData = 'Enter some text!';
    this.myDataDelay = 2000;
  }
}
