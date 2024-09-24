async function getUserData() 
{
    try 
    {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        return data;
    } 

    catch (error) 
    {
        console.error('ERROR', error);
    }
}


async function printdata() 
{
    let data = await getUserData();

    for (const element of data) 
    {
        console.log(`\nName: ${element.name}, Email: ${element.email}\n`);
    }
}


printdata();
