async function fetchData(callback) {
    return new Promise((resolve) => {
        setTimeout(async () => {
            console.log("Data fetched!");
            await callback();
            resolve();
        }, 2000);
    });
}

async function processData() {
    console.log("Processing data...\n");
}

async function main() {
    await fetchData(processData);
    await fetchData(processData);
    await fetchData(processData);
    await fetchData(processData);
    await fetchData(processData);
    console.log("Data Fetching and Processing done !\n\n")
}

main();
