/// <reference path='../../../node_modules/immutable/dist/immutable.d.ts' />
/// <reference path='../../../node_modules/ramda/dist/ramda.d.ts' />

import Immutable = require('immutable');
import {List, Record, Map} from 'immutable';
var R = require('ramda');

export class BookSnipet2 {
  constructor() {
  }

  public executeCode() {
    var defaultTo42 = R.defaultTo(42);
    let result = defaultTo42(parseInt('21')); //=> 42
    console.log(R.contains(3, [1, 2, 3])); //=> true);
    
    
    //IMPURE THIS FIRST TWO???
    var getJSON = R.curry(function(callback, url) {
      getJSON(url, callback);//whats this?
    });

    var setHtml = R.curry(function(sel, html) {
      (sel).html(html);//whats that about?
    });
    
    var img = function (url) {
      return ('<img />', { src: url });
    };
    
    var trace = R.curry(function(tag, x) {
      console.log(tag, x);
      return x;
    });
    
    ////////////////////////////////////////////

    var url = function (t) {
      return 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' +
        t + '&format=json&jsoncallback=?';
    };
    
    var mediaUrl = R.compose(R.prop('m'), R.prop('media'));

    var srcs = R.compose(R.map(mediaUrl), R.prop('items'));

    var images = R.compose(R.map(img), srcs);

    var renderImages = R.compose(setHtml('body'), images);

    var app = R.compose(getJSON(renderImages), url);

    console.log(app('cats'));

  }
  
  
      
}
//https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch4.html
