var posts = [
        { id: 1, title: 'New Post' },
        { id: 2, title: 'Old Post' },
        { id: 3, title: 'Middle Post 1' },
        { id: 4, title: 'Middle Post 2' },
        { id: 5, title: 'Middle Post 3' }
    ];

var comment = { postId: 4, content: 'awesome post'};

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}

var p = postForComment(posts, comment);

console.log(p);