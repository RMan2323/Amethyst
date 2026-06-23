import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes'
import App from './App.jsx';
import { system } from "@chakra-ui/react/preset";
import { BrowserRouter } from "react-router-dom"
import './components/globals.css'

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  cssVarPrefix: 'chakra'
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider attribute='class'>
    <ChakraProvider value={system}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);