import 'regenerator-runtime/runtime';
import React from 'react';
import "@near-wallet-selector/modal-ui/styles.css";
import { Fragment } from "react";
import { WalletSelectorContextProvider } from "./contexts/WalletSelectorContext";
import Content from "./components/Content";

const App = () => {
  return (
    <Fragment>
      <h1>NEAR Guest Book</h1>
      <WalletSelectorContextProvider>
        <Content />
      </WalletSelectorContextProvider>
    </Fragment>  
    );
};

export default App;
