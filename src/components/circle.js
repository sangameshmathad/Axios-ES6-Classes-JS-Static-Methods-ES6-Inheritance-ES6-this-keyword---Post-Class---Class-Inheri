// import using require
import Shape from ./shape.js;
// declare class
export class Circle extends Shape{
  calculateArea(radius){
   console.log("Area is" + 3.14 * radius * radius);
  }
  color(){
  console.log("color");
  }
}



// export class using module.exports
