import React from 'react';
import { auth } from './firebase/firebase.utils';
import Header from "./components/header/header.component";
import {Homepage} from './pages/homepage/homepage.component';
import Shop from './pages/shoppage/shop.component';
import Signinup from './pages/sign-inup/sign-inup.component';
import './App.css';
import {Route,Switch} from 'react-router-dom';
//import {Hats} from './components/hats/hats.component';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(this.state.currentUser);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }
  render(){
    
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
    <Route exact={true} path='/' component={Homepage} />
    <Route  path='/shop' component={Shop} />
    <Route  path='/sign-in' component={Signinup} />
    </Switch>
    </div>
  );
}}

export default App;
