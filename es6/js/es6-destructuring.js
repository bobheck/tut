// destructuring

// old coding style
var expense = {
    type: 'Business',
    amount: '42.67 USD',
};

console.log('expense: ', expense);

var old_type = expense.type;
console.log('old_type: ', old_type);
var old_amount = expense.amount;
console.log('old_amount: ', old_amount);


// es6 destructuring
// this does not create an object, it says to pull a properties 
// from an object and name of the var the same as the property
const { type, amount } = expense;       
console.log('amount: ', amount);
console.log('type: ', type);

//-----------------------------------

var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

// old way
function fileSummaryOldWay(file){
    return `The file ${file.name}.${file.extension} has a size of ${file.size}`;
}

var oldSummary = fileSummaryOldWay(savedFile);
console.log('oldSummary: ', oldSummary);

function fileSummaryNewWay({name, extension, size}, {caption}){
    return `The file ${name}.${extension} has a size of ${size} and the caption ${caption}`;
}

var newSummary = fileSummaryNewWay(savedFile, {caption: 'Windy Day'});
console.log('newSummary: ', newSummary);

//------------------------------------------

// destructuring arrays

const companies = [
    
    'Google',
    'Microsoft',
    'Amazon'
];
console.log('companies: ', companies);

const [name, name2, name3] = companies;
const[first, ...therest] = companies;
const {length} = companies;

console.log('name: ', name);
console.log('name2: ', name2);
console.log('name3: ', name3);
console.log('length: ', length);
console.log('first: ', first);
console.log('therest: ', therest);

//-----------------------

// destructuring objects and arrays
const companies2 = [
    { name: 'Google', loc: 'Mountain View' },
    { name: 'Microsoft', loc: 'Redmond' },
    { name: 'Amazon', loc: 'San Jose' }
];
console.log('companies2: ', companies2);

console.log('location: ', location);  // ???

const [{ loc }] = companies2;
console.log('loc: ', loc);


//-----------------------
const company = {
    name: 'Google',
    datacenters: ['Iowa', 'Red Oak', 'Midlothian']
};

console.log('company: ', company);

const {datacenters: [firstdatacenter, ...rest]} =  company;
console.log('firstdatacenter: ', firstdatacenter);
console.log('rest: ', rest);

//--------------------  usages

function signup({city, name, password, email, dob}) {
    console.log('city: ', city);
    console.log('dob: ', dob);
    console.log('email: ', email);
    console.log('password: ', password);
    console.log('name: ', name);

    // create new user
}

const userinfo = {
    name: 'bob',
    password: 'mypwd',
    email: 'myemail@something.com',
    dob: '1/1/1965',
    city: 'Midlothian'
};

signup(userinfo);

// usage of array deconstruct
// need to produce array of objects with x and y properties

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];
console.log('points: ', points);

let points2 = points.map(([x, y]) => {
    return { x, y};
});

console.log('points2: ', points2);


