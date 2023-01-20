import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/* This is a very small wrapper around fetch that aims to simplify HTTP requests.
It will cover the vast majority of your HTTP request needs. */


const cryptoApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
}


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

/* CreateApi = It allows you to define a set of "endpoints" that describe how to retrieve data from backend APIs */

export const cryptoApi = createApi({

  reducerPath: 'cryptoApi',

  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({

    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),


  })
})


export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;