'use strict';

describe('Matt', function() {
  var matt;

  beforeEach(function() {
    matt = new Matt();
  });

  it('says hello', function() {
    expect(matt.greeting()).toEqual('Hello');
  });

  it('returns a phrase', function() {
    expect(matt.select()).toEqual('Modesty is for fucking idiots')
  });

  it('returns a different phrase each time', function() {
    expect(matt.select()).toEqual('My life is just quotable');
  });
});
