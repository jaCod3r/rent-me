import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Header } from "./shared/Header";

import {Provider } from 'react-redux';
import "./App.css";
import RentalList from "./components/rental/RentalList";
import RentalDetail from "./components/rental/RentalDetail";
import { init } from './reducers';

const store = init();


class App extends Component {
  // constructor(){
  //   super();
  //
  //   this.state = {
  //     isRentalList: true
  //   }
  //   Using bind
  //   this.navigate = this.navigate.bind(this);
  // }

  // navigate() {
  //   this.setState({
  //     isRentalList: !this.state.isRentalList
  //   })
  // }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Header />
        {/*<button onClick={() => {this.navigate()}}>Navigate</button>*/}
        <div className="container">
          {/*{this.state.isRentalList ? <RentalList /> : <RentalDetail/>}*/}
          <Route exact path="/" render={() => {return <Redirect to='/rentals'/>}}/>
          <Route exact path="/rentals" component={RentalList}/>
          <Route exact path="/rentals/:id" component={RentalDetail}/>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
