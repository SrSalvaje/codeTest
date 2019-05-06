describe('multiplier', () => {
  
  const multiplier = (x) => {
    return (y) => x*y;
  };

  describe('when given a number, a function is returned which when called', () => {
    it('returns the multiplication of the two numbers', () => {
      const times12 = multiplier(12);

      assert.equal(times12(3), 36);
    });
  });
});

describe('counter', () => {
  //assign to count the return value of an IIFE
  const count = (() => {
    //IIFE sets counter to 0 and returns a function
    let counter = 0;
  //this is the function called by count, which now has access to its parent's scope
    return () => {
      //increases the counter by 1
      counter+=1;
      //returns it and subtracts 1, that way the first time is ran it will equal 0
      return counter-1
    } 
  })();

  it('returns an increasing number each time it is called', () => {
    assert.equal(count(), 0);
    assert.equal(count(), 1);
    assert.equal(count(), 2);
  });
});
