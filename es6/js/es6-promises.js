

let promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve();
    }, 3000);
 });

 let promise2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject();
    }, 5000);
 });


promise
    .then(() => {
        console.log('successfully finished p1');
    })
    .then(()=> {
        console.log('Also ran in then() p1');
    })
    .catch(()=> {
        console.log('error in promise, rejected p1');
    });

promise2
    .then(() => {
        console.log('successfully finished p2');
    })
    .then(()=> {
        console.log('Also ran in then() p2');
    })
    .catch(()=> {
        console.log('error in promise, rejected p2');
    });

//--------------------
// fetch

let url = "https://jsonplaceholder.typicode.com/posts2";

let promise3 = fetch(url);

promise3
    .then(response => response.json())
    .then((data)=> {
        console.log(data);
    })
    .catch(()=> {
        //console.log("Error: " + response);
    });





