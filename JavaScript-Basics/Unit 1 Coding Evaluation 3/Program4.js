// ## **Square Object**

// 1. Create an object with a key called **side**.
// 2. The object must have 2 methods,
//     1. **perimeter:** It will return the perimeter of the square, and
//     2. **area:** It will return the area of square
let obj = {
    side: 5,
    perimeter : function(){
        console.log(this.side*4);
    },
    area : function(){
        console.log(this.side*this.side);
    }

}
obj['perimeter']();
obj['area']();
