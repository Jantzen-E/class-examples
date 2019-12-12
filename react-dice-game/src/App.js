import React from 'react';
import './App.css';
import Die from './components/Die';
import { render } from '@testing-library/react';
import DiceBagPage from './pages/DiceBagPage';


    
 



class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      name: 'Dice practice'
    };
  }

  render() {
    return (
      <div className="diceSides">
        {/* <Die sides={ 6 }/>
        <Die sides={ 10 }/>
        <Die sides={ 12 }/>
        <Die sides={ 8 }/>
        <Die sides={ 4 }/>
        <Die sides={ 9 }/>
        <Die sides={ 13 }/> */}
        <DiceBagPage/>
      </div>
      
    );
  }  
}

export default App;
