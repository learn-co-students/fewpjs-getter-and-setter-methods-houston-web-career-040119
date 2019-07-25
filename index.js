// Add your Circle class here
const pi = Math.PI
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius*2
    }
    set diameter(newDiameter){
        this.radius = (newDiameter/2)
    }
    get circumference(){
        return this.radius*2* pi
    }
    set circumference(newCircumference){
        this.radius = (newCircumference/(pi*2))
    }
    get area(){
        return pi*this.radius*this.radius
    }
}