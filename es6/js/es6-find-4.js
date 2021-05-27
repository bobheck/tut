// Exercise 1

//Finding Admin Users
//Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.

var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

// solution
var admin = users.find(function(user) {
    return user.admin;
});

console.log(admin);


// Exercise 2
// Find the account with a balance of 12 and assign it to the variable 'account'.

var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

// solution
var account = accounts.find(function(account) {
    return account.balance ===12;
});

console.log(account);
