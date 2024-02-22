import React from 'react';
import {render} from 'react-dom';
import App from './App';
import TestPage from './component/TestPage';
import ActorWindow  from './component/ActorWindow';
import StyledComponent from './component/StyledComponent';


import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import ReactDOM from 'react-dom';


//const rootElement = document.getElementById("root");
//render(<TestPage />, rootElement);

//ReactDOM.render(
 // <StyledComponent></StyledComponent>,
  //document.getElementById('root'),
//);


getChainOptions().then((chainOptions) => {
    ReactDOM.render(
      <WalletProvider {...chainOptions}>
       <App/>
      </WalletProvider>,
      document.getElementById('root'),
    );
  });
  
  
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
