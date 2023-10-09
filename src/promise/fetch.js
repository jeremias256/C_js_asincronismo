import fetch from 'node-fetch';

const API = 'https:/api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('segundo then');
//     })
//     .catch(error => console.log(error))


fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log('🚀 - file: fetch.js:23 - products:', products[0].title);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log('🚀 - file: fetch.js:32 - category:', category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))