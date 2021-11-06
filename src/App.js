import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Svg from './components/svg/svg';
import Slider from './components/slider/slider';
import Loading from './components/loading/loading';
import Process from './components/process/process';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= '/svg' component = {Svg} />
        <Route exact path= '/slider' component ={Slider} />
        <Route exact path='/loading' component={Loading} />
        <Route exact path= '/process' component={Process} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
