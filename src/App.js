import React from 'react';
import {Homepage} from './pages/homepage/homepage.component';
import Shop from './pages/shoppage/shop.component';
import './App.css';
import {Route} from 'react-router-dom';
//import {Hats} from './components/hats/hats.component';
function App() {
  return (
    <div className="App">
    <Route exact={true} path='/' component={Homepage} />
    <Route  path='/shop' component={Shop} />
    </div>
  );
}

export default App;
