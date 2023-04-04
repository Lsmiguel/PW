/*

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if (response.ok){
                resolve(response.json())
            }else{
                reject(response.json())
            }
        }).catch(error => {
            reject(error.message)
        })
    })
}

async function getData(url) {
    try {
        const data = await fetchData(url)
    } catch(error) {
        console.log(error);
    }
}


getData('https://jsonplaceholder.typicode.com/todos/1');


//
fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch((error) => {
        console.log(error);
});

*/