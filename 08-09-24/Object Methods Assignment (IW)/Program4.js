// Write a function called calculateSalesTotals()
//  which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. The default value would be 0.0.

// SAMPLE INPUT :
function calculateSalesTotals() {
    let updatedSales = [];
    var sales = [
        { item: 'PS4 Pro', stock: 3, original: 399.99 },
        { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
        { item: 'Nintendo Switch', stock: 4, original: 299.99 },
        { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
        { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
    ];

    for (let i = 0; i < sales.length; i++) {
        let item = sales[i];
        let discount = item.discount || 0.0;
        let salePrice = item.original * (1 - discount);
        let totalPrice = salePrice * item.stock;

        let updatedItem = {
            item: item.item,
            original: item.original,
            sale: salePrice,
            stock: item.stock,
            total: totalPrice
        };

        updatedSales.push(updatedItem);
    }

    return updatedSales;
}
console.log(calculateSalesTotals());



