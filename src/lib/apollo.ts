import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient(
  {
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4ocgefh1qfd01xr3v0phseg/master',
    cache: new InMemoryCache()
  })