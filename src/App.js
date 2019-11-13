import React from 'react';
import { Header } from './stlyd-comp/layout';
import GlobalStyle from './store/root';
import { CustomTitle } from './stlyd-comp/textStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <CustomTitle bgColor="rgba(0, 213, 60, 0.1)">Automação da casa do Gordim Danaaaaado!!</CustomTitle>
    </>
  );
}

export default App;
