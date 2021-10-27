import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Svg from './components/svg/svg';
import Slider from './components/slider/slider';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= '/svg' component = {Svg} />
        <Route exact path= '/slider' component ={Slider} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
