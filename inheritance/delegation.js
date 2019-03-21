// base object with methods including initialization
var Vehicle = {
    init: function(name) {
      this.name = name;
    },
    start: function() {
      return "engine of "+this.name + " starting...";
    }
  }
  // delegation link created between sub object and base object
  var Car = Object.create(Vehicle);

  // sub object method
  Car.run = function() {
    console.log("Hello "+ this.start());
  };
  // instance object with delegation link point to sub object
  var c1 = Object.create(Car);
  c1.init('Fiesta');

  var c2 = Object.create(Car);
  c2.init('Baleno');

  c1.run();   // "Hello engine of Fiesta starting..."
  c2.run();   // "Hello engine of Baleno starting..."