async function fetchWithRetry(url){
    let attempt = 0;

    while (attempt < 3) {
        console.log(`Attempt ${attempt}`);
        try {
            let response = await fetch(url);
            if (response.ok)
            {
                return await response.json();
            }
            else
            {
                attempt++
            }
        }

        catch (error) {
            attempt++;
            console.log(`Attempt ${attempt} failed. Retrying...\nMax Unsuccesful Attempt = 3`);
        }
    }

    throw new Error("Fetch failed after 3 retries.");
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log(data))
    .catch(error => console.error(error));
