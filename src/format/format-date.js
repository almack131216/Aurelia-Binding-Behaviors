import moment from 'moment';
import {inject} from 'aurelia-framework';
import {Configuration} from '../globals'; 

@inject(Configuration)
export class DateFormatValueConverter {
    constructor(config) {
        this.gDateFormat = config.gDateFormat;
    }
   toView(value, format) {
      return moment(value).format(format ? format : this.gDateFormat);
   }
}