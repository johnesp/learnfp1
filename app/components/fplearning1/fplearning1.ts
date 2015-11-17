import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {NameList} from '../../services/name_list';

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
  executeCode() {
    console.log('jojojo, EXECUTING...!');
    /*
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
    punch(jobe, michael);
    
    
    var map1: Immutable.Map<string, number>;
    map1 = Immutable.Map({a:1, b:2, c:3});
    //=> Immutable.Map({name:"Michael", hp:19, team: "green"})
    */
    
    //var jobe = Immutable.Map({name:'Jobe', hp:20, team: 'red'});
    
    
    console.log('FINISHED EXECUTING...!');
    }
}
