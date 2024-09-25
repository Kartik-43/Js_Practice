let text = ["Initializing Hacking", "Reading your Files", "Password files Detected", "Sending all passwords and personal files to server", "Cleaning up",
];


let t = setInterval(() => {
    let last = document.body.lastElementChild;
    if (last.innerHTML.endsWith("...")) {
        last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    }

    else {
        last.innerHTML = last.innerHTML + ".";  
    }

}, 500);


const randomDelay = async () => {
    return new Promise((resolve, reject) => {
        let time = (1 + 6*Math.random()) * 1000;

        setTimeout(() => {
            resolve();
        }, time)
    })
}


const additem = async (item) => {
    await randomDelay();
    let div = document.createElement("div")
    div.innerHTML = item
    document.body.append(div)
}


async function main()
{
    for (const item of text) {
        await additem(item);
    }

    await randomDelay();
    clearInterval(t);
}

main();
