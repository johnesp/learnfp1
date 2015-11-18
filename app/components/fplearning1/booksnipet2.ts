/// <reference path='../../../node_modules/immutable/dist/immutable.d.ts' />
/// <reference path='../../../node_modules/ramda/dist/ramda.d.ts' />

import Immutable = require('immutable');
import {List, Record, Map} from 'immutable';
var R = require('ramda');
var $ = require('jquery');

export class BookSnipet2 {
  constructor() {} 

  public executeCode():any {
    //IMPURE //Crea una funcion con CURRY que inyecta un html dentro de una selección.
    var setHtml_IMPURE = R.curry(function(sel, html) {
      //$(sel).html(html);//whats that about?
      console.log("setHtml_IMPURE:" ,html);
    });
    
    //IMPURE  //Crea una funcion con CURRY que ejecuta una carga asyncrona de json desde una url
    var getJSON_IMPURE = R.curry(function(callback, url) {
      $.getJSON(url, callback);
    });    
    
    //IMPURE set local state
    var setComponentImages = function(loadedImages){
      console.log("setComponentImages:" ,loadedImages);      
    };
    
    // Crea una función con CURRY que imprime en consola un log, usando dos strings y retorna el valor 'x' para ser usado posteriormente
    var trace = R.curry(function(tag, x) {
      console.log(tag, x);
      return x;
    });
    
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
    app('cats');   
    
    //var app = R.compose(getJSON_IMPURE(trace('response')), url);
    
    //this is for learning purposes only app can be defined as: //var app = R.compose(getJSON_IMPURE(trace('response')), url);    
    //var partiallyAppliedCurry = getJSON_IMPURE(trace('response is: '));    
    //var app = R.compose(partiallyAppliedCurry, url);
    
///FULL!
  /*  
    
*/
  } 
}
//https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch4.html
