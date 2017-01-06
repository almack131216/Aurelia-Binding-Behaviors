import numeral from 'numeral';

export class ConvertTicksValueConverter {
  toView(value) {
    return numeral(value / 1000).format('0[.][0]');//2500 becomes 2.5, 2000 becomes 2
  }
}