import React,{ Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GifSearch from './components/GifSearch';

const App = () =>(
  <Fragment>
    <Header/>
    <GifSearch/>
    <Footer/>
  </Fragment>
);
//GifExpertApp
// <h2>GifExperts</h2>
//propiedad para ver bien del componente por consola
App.displayName ='App';

export default App;
