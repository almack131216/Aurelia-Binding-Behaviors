import {inject} from 'aurelia-framework';
import {Configuration} from './globals';
//import {bootstrap} from 'bootstrap';

@inject(Configuration)
export class App {
  constructor(config) {        
    this.title = 'Aurelia - Binding Behavior';

    this.currentDate = new Date();

    this.myCurrencyValue = 999.99;//Math.random() * 1000

    this.throttle_title = 'throttle';
    this.throttle_inp = 'Test Throttle';

    this.debounce_title = 'debounce';   
    this.debounce_inp = 'Test Debounce';

    // global variables
    this.myDataDelay = config.gDelay;
    this.myDataDelay2 = config.gDelay2;

    this.message = `this is my text
it has some line breaks
and some <script>evil javascript</script>
the line breaks were replaced with <br/> tags`;

  }
}
