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
    spyOn( matt, '_random').and.returnValue('Modesty is for fucking idiots');
    expect(matt.selector()).toEqual('Modesty is for fucking idiots')
  });

  it('returns a different phrase each time', function() {
    spyOn( matt, '_random').and.returnValue('My life is just quotable');
    expect(matt.selector()).toEqual('My life is just quotable');
  });
});
