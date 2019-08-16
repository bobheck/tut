// filter helper

var products = [
    { name: 'cucumber', type: 'vegetable', qty: 0, price: 1 },
    { name: 'banana', type: 'fruit', qty: 10, price: 15 },
    { name: 'celery', type: 'vegetable', qty: 30, price: 13 },
    { name: 'orange', type: 'fruit', qty: 3, price: 5 }
];

// filter by type

// classic for loop
var filteredProductsFor = [];

for (var i =0; i < products.length; i++) {
    if(products[i].type === 'fruit') {
        filteredProductsFor.push(products[i]);
    }
}

console.log(filteredProductsFor);

// using filter helper
var filteredProductsFilter = products.filter(function(product) {
    return product.type === 'fruit';
});
console.log('filteredProductsFilter:');
console.log(filteredProductsFilter);

// using passed variable
var findProd = function(typ)
{
   return products.filter(function (product) {
        return product.type === typ;
    });
}

var filteredProductsVar = findProd('fruit');
console.log('filteredProductsVar: fruit');
console.log(filteredProductsVar);
var filteredProductsVar = findProd('vegetable');
console.log('filteredProductsVar: vegetable');
console.log(filteredProductsVar);
var filteredProductsVar = findProd('meat');
console.log('filteredProductsVar: meat');
console.log(filteredProductsVar);



// more about filter
// type is veg, qty is greater than 0, price is less than 10

var multipleFilter = products.filter(function(product) {
    return product.type === 'vegetable'
    && product.qty > 0
    && product.price < 20
});

console.log('multipleFilter:');
console.log(multipleFilter);

