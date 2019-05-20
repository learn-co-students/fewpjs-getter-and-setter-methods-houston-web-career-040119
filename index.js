// Add your Circle class here

class Circle {

  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.diameter = 2 * this.radius
  }

  get circumference(){
    return this.circumference = 2 * this.radius * Math.PI
  }

  get area(){
    return this.area = Math.PI * Math.pow( this.radius , 2 )
  }

  set diameter(diameter){
    this.radius = diameter / 2
  }

  set circumference(circumference){
    this.radius = circumference / (2 * Math.PI)
  }

  set area(area){
    this.radius = Math.sqrt( area / (Math.PI) )
  }

}
