'use strict';

function Matt() {
  this.hello = 'Hello';
};

Matt.prototype.greeting = function() {
  return this.hello;
}

Matt.prototype.select = function () {
  return 'Modesty is for fucking idiots';
};
