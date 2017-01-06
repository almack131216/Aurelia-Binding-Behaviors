import { inject } from 'aurelia-framework';
import { Configuration } from '../globals';

@inject(Configuration)
export class Formatters {
    constructor(config) {
        this.currentDate = new Date();

        this.myCurrencyValue = 999.99;//Math.random() * 1000
    }
}