import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Contact } from '../interfaces/interfaces'




export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3004/"}),
    endpoints:(builder) =>({
        contacts: builder.query<Contact[],void>({
            query: () => '/contacts'
        }),
        contact: builder.query<Contact,number>({
            query: (id) => `/contacts/${id}`
        })
    })
})

export const {useContactsQuery,useContactQuery} = contactsApi;