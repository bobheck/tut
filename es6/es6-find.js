
var users = [
    { name: 'Jill', id: 1},
    { name: 'Bill', id: 2},
    { name: 'Alex', id: 3},
    { name: 'Bob', id: 4},
    { name: 'Jan', id: 5},
    { name: 'Alex', id: 6}
]

var myuser = users.find(function(user) {
   return user.name === 'Alex';
});

console.log(myuser);