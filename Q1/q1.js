function Circle(radius) {
  this.radius = radius;
  this.getArea = () => {
    return Math.PI * this.radius ** 2;
  };
  this.getPerimeter = () => {
    return 2 * Math.PI * this.radius;
  };
}
let result = new Circle(3);
console.log(result.getArea ());
console.log( result.getPerimeter());
