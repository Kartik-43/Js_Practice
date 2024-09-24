async function fetchPostComments(postId)
{
    try 
    {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        let data = await response.json();

        data.forEach(e => {
            console.log(`\nComment by: ${e.name}, Comment : ${e.body}`);
        });
    }

    catch (error) 
    {
        console.error("ERROR !", error);
    }
}

fetchPostComments(1);


// Better Code :-
//
// async function fetchPostComments(postId) {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         let data = await response.json();

//         // Return the data instead of just logging it
//         return data;

//     } catch (error) {
//         console.error("ERROR !", error);
//     }
// }

// // Using the returned data
// fetchPostComments(1).then(data => {
//     if (data) {
//         data.forEach(e => {
//             console.log(`\nComment by: ${e.name}, Comment : ${e.body}`);
//         });
//     }
// });
