import moment from 'moment';
import numeral from 'numeral';
//import currencyFormat from 'currency-format';
import {inject} from 'aurelia-framework';
import {Configuration} from './main'; 


export class DateFormatValueConverter {
   toView(value, format) {
      return moment(value).format(format ? format : 'MMMM Mo YYYY');
   }
}

export class NumberFormatValueConverter {
  toView(value, format) {
    return numeral(value).format(format ? format : '');
  }
}

@inject(Configuration)
export class CurrencyFormatValueConverter {
    constructor(config) {
        this.gCurrency = config.gCurrency;
    }
    toView(value, format, currency = currency ? currency : this.gCurrency) {
        return currency + numeral(value).format(format);
    }
}