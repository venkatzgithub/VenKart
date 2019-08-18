import React from 'react';
import Header from "./components/header/header.component";
import {Homepage} from './pages/homepage/homepage.component';
import Shop from './pages/shoppage/shop.component';
import './App.css';
import {Route,Switch} from 'react-router-dom';
//import {Hats} from './components/hats/hats.component';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
    <Route exact={true} path='/' component={Homepage} />
    <Route  path='/shop' component={Shop} />
    </Switch>
    </div>
  );
}

export default App;
