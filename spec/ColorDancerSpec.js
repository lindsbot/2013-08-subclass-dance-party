describe("ColorDancer", function() {
  var colorDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorDancer = new ColorDancer(10, 20, timeBetweenSteps);
  });

  it("should inherit from the Dancer prototype", function(){
    expect(colorDancer).to.be.an.instanceof(Dancer);
  });

  it("should have a step function", function(){
    expect(!!colorDancer.step).to.be.true;
  });

  it("should have a step function that makes it change colors", function() {
    sinon.spy(colorDancer, "step");
    expect(colorDancer.step.callCount).to.be.equal(0)
    clock.tick(timeBetweenSteps);
    
    expect(colorDancer.step.callCount).to.be.equal(1);

    clock.tick(timeBetweenSteps);
    expect(colorDancer.step.callCount).to.be.equal(2);
  });


});