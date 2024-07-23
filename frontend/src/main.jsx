import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { ChakraProvider } from '@chakra-ui/react'
import { mynewtheme } from './theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  
  <React.StrictMode>
    <ChakraProvider theme={mynewtheme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
  </Provider>,
)
