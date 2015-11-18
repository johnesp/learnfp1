import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {NameList} from '../../services/name_list';

import {BookSnipet1} from './booksnipet1';
import {BookSnipet2} from './booksnipet2';

@Component({
  selector: 'fplearning1',
  templateUrl: './components/fplearning1/fplearning1.html',
  directives: [CORE_DIRECTIVES]
})
export class FpLearning1Comp {
  constructor(public list: NameList) {
  }
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  executeCodeBookSnipet1() {
    let booksnipet:BookSnipet1 = new BookSnipet1();
    booksnipet.executeCode();
  }
  
  executeCodeBookSnipet2() {
    let booksnipet:BookSnipet2 = new BookSnipet2();
    booksnipet.executeCode();
  } 
}

