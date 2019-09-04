var post = {id: 4, title: 'New Post'};

var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'},
]

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
       return comment.postId === post.id;
    });
}

var postComments = commentsForPost(post, comments);

console.log(postComments);

// assignment 1
// Filtering Values
// Filter the array of numbers using the filter helper,
// creating a new array that only contains numbers
// greater than 50.  Assign this new array to a variable
// called 'filteredNumbers'.  Don't forget to use
// the 'return' keyword in the function!

// solution
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function (number) {
    return number > 50;
});

console.log(filteredNumbers);


// assignment 2
// Handling Permissions with Filter
// Filter the array of users, only returning
// users who have admin level access.  Assign
// the result to the variable 'filteredUsers'.
// Don't forget to use the 'return' keyword in the function!

// solution
var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
    return user.admin;
});

console.log(filteredUsers);


//assignment 3
//Challenging! Implementing 'reject'.
// This is a hard one!  Create a function called 'reject'.
// Reject should work in the opposite way of 'filter'
// - if a function returns 'true', the item should *not*
// be included in the new array.  Hint: you can reuse filter.

// solution
function reject(array, iteratorFunction) {
    return array.filter(function(arrItem) {
        return iteratorFunction(arrItem) === false;
    });
}

