import {inject} from 'aurelia-framework';
import {Configuration} from '../globals';
//import {bootstrap} from 'bootstrap';

@inject(Configuration)
export class StringFormatting {
    constructor(config) {        

    this.message = `this is my text
it has some line breaks
and some <script>evil javascript</script>
the line breaks were replaced with <br/> tags`;
  }
}