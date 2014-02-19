describe('calculator', function () {

  var should = chai.should();

  it('should be defined', function (done) {
    Calculator.should.be.defined;
    done();
  });

  it('should return 0 with 0 arguments', function (done) {
    Calculator.add().should.equal(0);
    done();
  });

  it('should return the bare number', function (done) {
    Calculator.add('4').should.equal(4);
    done();
  });

  it('should return the sum of integers separated by spaces', function (done) {
    Calculator.add('1 2 3 4').should.equal(10);
    done();
  });

  it('should return the sum of integers separated by any whitespace character', function (done) {
    Calculator.add("1\t2 3\n4").should.equal(10);
    done();
  });

  it('should return the sum of integers separated by a defined separator', function (done) {
    Calculator.add('//abc1abc2abc3abc4').should.equal(10);
    done();
  });

});
