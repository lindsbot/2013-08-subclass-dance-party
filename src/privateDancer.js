var PrivateDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

PrivateDancer.prototype = Object.create(Dancer.prototype);
PrivateDancer.prototype.constructor = PrivateDancer;
PrivateDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.removeClass("dancer");
  this.$node.addClass("tina");
};