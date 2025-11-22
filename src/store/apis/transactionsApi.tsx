import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: string;
  date: string;
}


export const transactionApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Transactions'],
  endpoints: (builder) => ({
    // reading transactions
    getTransactions:builder.query<Transaction[], void>({query:()=>"transactions",providesTags: ['Transactions']}),
    // creating transactons
    AddTransaction:builder.mutation<Transaction, Transaction>({
        query: (newTransaction)=>({
            url:"/transactions",
            method:"POST",
            body:newTransaction
        }),
        invalidatesTags: ["Transactions"]
    }),
    // deleting an transaction (mutation)
    deleteTransaction:builder.mutation<Transaction,number>({
      query: (id) => ({
        url: `/transactions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["Transactions"]
    })
  }),
});

export const {useGetTransactionsQuery,useAddTransactionMutation,useDeleteTransactionMutation} = transactionApi
