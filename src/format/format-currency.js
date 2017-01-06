import numeral from 'numeral';
import {inject} from 'aurelia-framework';
import {Configuration} from '../globals'; 

@inject(Configuration)
export class CurrencyFormatValueConverter {
    constructor(config) {
        this.gCurrency = config.gCurrency;
    }
    toView(value, format, currency = currency ? currency : this.gCurrency) {
        return currency + numeral(value).format(format);
    }
}