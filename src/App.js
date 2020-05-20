import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Changes from './Changes';
import Feature from './Feature';
import Annotate from './Annotate';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Header></Header>
      <Changes></Changes>
      <Feature></Feature>
      <Annotate></Annotate>
      <Footer></Footer>
    </div>
  );
}

export default App;
