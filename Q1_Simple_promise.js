// Code Made by ME...

// function delayMessage(message, delay)
// {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });

//     promise
//     .then(result => {
//         console.log(result);
//     })
// }

// delayMessage("\nKartik Garg!\nCode running Succesfully !\n", 2000);

function delayMessage(message, delay) 
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

delayMessage("\nKartik Garg!\nCode running Successfully!\n", 2000)
    .then(result => {
        console.log(result);
    });
