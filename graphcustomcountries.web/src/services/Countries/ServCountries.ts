// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from "@apollo/client";

// const client = new ApolloClient({
//   uri: 'https://countries-274616.ew.r.appspot.com',
//   cache: new InMemoryCache()
// });
const URL_API = 'http://localhost:63120';
const URL_CONTROLLER_COUNTRY = 'country';

export const getCountries = async () => {
    // const countries = await client
    //     .query({
    //     query: gql`
    //         query {
    //             Country {
    //                 _id
    //                 name
    //                 capital
    //             }
    //         }
    //     `
    //     });

    const _request = await fetch(`${URL_API}/${URL_CONTROLLER_COUNTRY}`, {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors'
    });


    const _response = await _request.json();
    return _response;
}

export const getCountry = async (id: Number) => {
    const _request = await fetch(`${URL_API}/${URL_CONTROLLER_COUNTRY}/${id}`, {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors'
    })

    const _response = await _request.json();

    return _response;
}

export const addCountry = async () => {
    const _request = await fetch(`${URL_API}/${URL_CONTROLLER_COUNTRY}`, {
        method: 'POST',
        headers: new Headers(),
        mode: 'cors'
    })

    const _response = await _request.json();

    return _response;
}

export const updateCountry = async (id: Number) => {
    const _request = await fetch(`${URL_API}/${URL_CONTROLLER_COUNTRY}/${id}`, {
        method: 'PUT',
        headers: new Headers(),
        mode: 'cors'
    })

    const _response = await _request.json();

    return _response;
}