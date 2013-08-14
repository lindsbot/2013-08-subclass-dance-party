var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorDancer.prototype = Object.create(Dancer.prototype);

ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this);
  var color = this.hexColor();
  this.$node.css({'border': '10px solid #' + color});
};

ColorDancer.prototype.hexColor = function(){
  var hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  var hexNum = '';
  for (var i = 0; i < 6; i++){
    hexNum += hex[Math.floor(Math.random() * hex.length)];
  }

  return hexNum;
};
