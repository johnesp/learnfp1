/// <reference path='../../../node_modules/immutable/dist/immutable.d.ts' />
import Immutable = require('immutable');
import {List, Record, Map} from 'immutable';

export class BookSnipet2 {
  constructor() {
  }
  
  public executeCode() {
    console.log('Starting snipet 2...!');
    var decrementHP = function(player) {
      return player.set('hp', player.get('hp')-1);
    };    
    var isSameTeam = function(player1, player2) {
      return player1.get('team') === player2.get('team');
    };    
    var punch = function(player, target) {
      if (isSameTeam(player, target)) {
        return target;
      } else {
        return decrementHP(target);
      }
    };    
    var michael = Map({name:'Michael', hp:20, team: 'green'});    
    var jobe = Immutable.Map({name:'Jobe', hp:20, team: 'red'});
    
    console.log(punch(jobe, michael));
    //returns:
    //=> Immutable.Map({name:"Michael", hp:19, team: "green"})
    }
}