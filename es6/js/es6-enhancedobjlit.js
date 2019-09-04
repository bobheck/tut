// enhanced object literals

// old way
function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;    
        }
    };
}

// new way
// rule 1: whenever you reference a key and value that has the same name, you can eliminiate the key
// rule 2: whenever you have a key value pair, where the value is a function, omit the colon and function keyword
function createBookShop2(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;    
        }
    };
}



const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Brian is a Whore', price: 4 }
];

const bookShop = createBookShop(inventory);
const bookShop2 = createBookShop2(inventory);


console.log(`inventory value: ${bookShop.inventoryValue()}`);
console.log(`Harry Potter: ${bookShop.priceForTitle('Harry Potter')}`);

console.log(`inventory value: ${bookShop2.inventoryValue()}`);
console.log(`price of Brian is a Whore: ${bookShop2.priceForTitle('Brian is a Whore')}`);