async function getPostAndComments(postId) {
    try {
        let response1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        let response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    
        if (response1.ok && response2.ok) {
            let post = await response1.json();
            let comments = await response2.json();
            return { post, comments };
        } else {
            console.log("Error fetching the post or comments.");
        }
    } catch (error) {
        console.error("Fetch failed!", error); 
        throw new Error("Fetch failed!");
    }
}

getPostAndComments(1)
    .then(data => console.log(data))
    .catch(error => console.error(error));
