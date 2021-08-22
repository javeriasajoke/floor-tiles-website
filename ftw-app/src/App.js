import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Person from './folder/Person';
//import Person1 from './folder/Person1';
import MyName from './folder/Person1';
import { render } from '@testing-library/react';



class App extends Component {
state = {
  names:['jaweriya', 'mariya', 'alia', 'mubashira', 'unaiza']
}

deleteMe(Ind){
  let arr = this.state.names;
  let newar = arr.splice(Ind, 1);
  arr = newar;
  return arr;
}


render(){
  return(
    <div>
       <MyName delete={this.deleteMe(0)} name={this.state.names[0]} />
    <MyName delete={this.deleteMe(1)} name={this.state.names[1]} />
    </div>
    

  )
}

}

export default App;