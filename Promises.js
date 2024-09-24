let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // Change to false to see reject
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed.");
        }
    }, 2000);
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
