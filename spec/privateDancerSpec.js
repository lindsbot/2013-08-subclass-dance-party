describe("PrivateDancer", function() {
  var privateDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    privateDancer = new PrivateDancer(10, 20, timeBetweenSteps);
  });

  it("should inherit from the Dancer prototype", function(){
    expect(privateDancer).to.be.an.instanceof(Dancer);
  });

  it("should have a step function", function(){
    expect(!!privateDancer.step).to.be.true;
  });

  it("should call step at least once per second", function() {
    sinon.spy(privateDancer, "step");
    expect(privateDancer.step.callCount).to.be.equal(0)
    clock.tick(timeBetweenSteps);

    expect(privateDancer.step.callCount).to.be.equal(1);

    clock.tick(timeBetweenSteps);
    expect(privateDancer.step.callCount).to.be.equal(2);
  });

});