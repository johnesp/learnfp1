/// <reference path='../../../node_modules/immutable/dist/immutable.d.ts' />
import Immutable = require('immutable');

import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {NameList} from '../../services/name_list';

import {List, Record, Map} from 'immutable';

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html',
  directives: [CORE_DIRECTIVES]
})
export class AboutCmp {
  constructor(public list: NameList) {
  }
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(newname): boolean {
    
    var map1: Immutable.Map<string, number>;    
    map1 = Immutable.Map({a:1, b:2, c:3});
    
    this.list.add(newname.value);
    newname.value = '';
    return false;
  }
}
