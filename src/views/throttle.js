import {inject} from 'aurelia-framework';
import {Configuration} from '../globals';

@inject(Configuration)
export class Throttle {
    constructor(config) {        

    this.throttle_title = 'throttle';
    this.throttle_inp = 'Test Throttle';

    this.debounce_title = 'debounce';   
    this.debounce_inp = 'Test Debounce';

    // global variables
    this.myDataDelay = config.gDelay;
    this.myDataDelay2 = config.gDelay2;
  }
}