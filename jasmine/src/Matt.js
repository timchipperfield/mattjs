'use strict';

function Matt() {
  this.hello = 'Hello';
  this._phrases = ['Modesty is for fucking idiots', 'My life is just quotable'];
};

Matt.prototype.greeting = function() {
  return this.hello;
}

Matt.prototype.selector = function () {
  return this._random();
};

Matt.prototype._random = function() {
   return this._phrases[Math.floor(Math.random() * this._phrases.length)];
};
