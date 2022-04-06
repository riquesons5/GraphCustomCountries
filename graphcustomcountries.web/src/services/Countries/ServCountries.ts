import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://countries-274616.ew.r.appspot.com',
    cache: new InMemoryCache()
  });

  export const getCountries = async () => {
    const countries = await client
        .query({
        query: gql`
            query {
                Country {
                    _id
                    name
                    capital
                }
            }
        `
        });
    
        return countries;
  } 