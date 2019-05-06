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
  const count = () => {
    // TODO: Complete this function to allow the test to pass
  };

  it('returns an increasing number each time it is called', () => {
    assert.equal(count(), 0);
    assert.equal(count(), 1);
    assert.equal(count(), 2);
  });
});
