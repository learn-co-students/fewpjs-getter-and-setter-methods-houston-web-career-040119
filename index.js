// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2*this.radius;
  }

  set diameter(d) {
    if(d > 0) {
      this.radius = d/2;
    } else {
      console.log("Diameter must be postive");
    }
  }

  get circumference() {
    return 2*Math.PI*this.radius;
  }

  set circumference(c) {
    if(c > 0) {
      this.radius = c/(2*Math.PI);
    } else {
      console.log("Circumference must be positive");
    }
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set area(a) {
    if(a > 0) {
      this.radius = Math.sqrt(a/Math.PI);
    } else {
      console.log("Area must be positive");
    } 
  }
}
