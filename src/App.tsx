import React from 'react';
import Routes from "./routes";

import Header from './components/organisms/header';
import Footer from './components/organisms/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
