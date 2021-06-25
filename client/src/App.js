import React from 'react';
import {GlobalStyle} from './styles/global';

import Home from './components/Pages/Home/index';


export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Home/>
    </>
  );
}
