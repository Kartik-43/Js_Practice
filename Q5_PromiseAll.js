function fetchUserData() {
    const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
    const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

    return Promise.all([userPromise, postPromise])
        .then(([users, posts]) => ({ users, posts }))
        .catch(error => console.error('Error:', error));
}


// function printData() {
//     fetchUserData().then(({ users, posts }) => {
//         users.forEach(user => {
//             console.log(`Name: ${user.name}, Email: ${user.email}`);
//         });

//         posts.forEach(post => {
//             console.log(`Post Title: ${post.title}`);
//         });
//     });
// }


function printData() {
    fetchUserData().then(({ users, posts }) => {
        const postCount = posts.reduce((acc, post) => {
            acc[post.userId] = (acc[post.userId] || 0) + 1;
            return acc;
        }, {});

        users.forEach(user => {
            const count = postCount[user.id] || 0;
            console.log(`Name: ${user.name}, Email: ${user.email}, Posts: ${count}`);
        });
    });
}


printData();
