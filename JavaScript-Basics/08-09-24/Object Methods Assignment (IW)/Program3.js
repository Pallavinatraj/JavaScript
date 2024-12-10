// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`
let products = {
    name: ["Rice", "Dal", "Salt"] ,
    quantity : [2, 3, 1],
    price : [60, 50, 20] ,
    total : function(){
        let sum =0;
        for(let i =0; i<this.quantity.length; i++){
            sum+=this.quantity[i]*this.price[i];
        }
        console.log(sum);
    }
}
products.total();
