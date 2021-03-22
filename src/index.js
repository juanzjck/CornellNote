import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Context from './context'
const client = new ApolloClient({
    uri:'http://192.168.100.2:4000',
    request: operation =>{
        const token= window.sessionStorage.getItem('token')
        const authorization=token ? `JWT ${token}` : ''
        operation.setContext({
            headers:{
                authorization
            }
        })
    },
    onError:error =>{
        console.log(error)
        const {errors}=error.response
        if(errors){
            window.sessionStorage.removeItem('token')
            window.location.href='/register'
        }
    }
})

ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App></App>
        </ApolloProvider>
    </Context.Provider>
,document.getElementById('app'))