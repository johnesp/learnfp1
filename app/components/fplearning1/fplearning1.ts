/// <reference path='../../../node_modules/immutable/dist/immutable.d.ts' />
/// <reference path='../../../node_modules/ramda/dist/ramda.d.ts' />

import Immutable = require('immutable');
import {List, Record, Map} from 'immutable';
var R = require('ramda');
var $ = require('jquery');

import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {NameList} from '../../services/name_list';

import {BookSnipet1} from './booksnipet1';
import {BookSnipet2} from './booksnipet2';


@Component({
  selector: 'fplearning1',
  templateUrl: './components/fplearning1/fplearning1.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class FpLearning1Comp {
  
  public resultImages:any;
  public searchTerm:String;
    
  constructor(public list: NameList) {
  }
  
   searchInFlickr() {
    this.executeFunctionalSearchInFlicker(this.searchTerm);
  }
  
 /*
 * This loads the resultImages array using functional programing tecniques
 * @param term  the term to search in flicker.
 * @returns return void for the time being.
 */
  executeFunctionalSearchInFlicker(term:String) {
        
    //IMPURE  //Crea una funcion con CURRY que ejecuta una carga asyncrona de json desde una url
    var getJSON_IMPURE = R.curry(function(callback, url) {
      $.getJSON(url, callback);
    });    
    
    //IMPURE set local state
    var setComponentImages = (loadedImages) => {      
      this.resultImages = loadedImages;  
    };
    
    //Crea una función pura que remplaza un parametro en una url del api http de flicker
    var url = function (t) {
      return 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' +
        t + '&format=json&jsoncallback=?';
    };
    
    //crea una funcion pura que retorna una tupla incluyendo el tag <img/> y la url recibida como parametro.//? evaluar ???
    var img = function (url) {
      return ('<img />', { src: url });
    };
    
    // crea una funcion compuesta, que extrae el valor de la propiedad 'media' y luego el valor de la propiedad 'm'
    var mediaUrl = R.compose(R.prop('m'), R.prop('media'));
    
    // crea una funcion compuesta, que extrae una lista o array de el valor de la propiedad 'items' 
    //y genera una nueva lista aplicando a cada item la funcion mediaUrl.
    var srcs = R.compose(R.map(mediaUrl), R.prop('items'));
    
    // crea una funcion compuesta que ejecuta la funcón srcs y luego a cada item la funcion img, creando una nueva lista (map) 
    var images = R.compose(R.map(img), srcs);
    
    //crea una nueva función que ejecuta la función images y luego sobre el resultado ejecuta SETHTML_IMPURE
    var renderImages = R.compose(setComponentImages, images);
    
    // crea una nueva función que le ejecuta la función "url" al parametro recibido y al resultado le ejecuta getJSON_IMPURE
    // ya que esta última es un curry, le establece como primer parametro la función renderImages
    var app = R.compose(getJSON_IMPURE(renderImages), url);
    
    //Execute app
    app(term); 
    
  } 
}

