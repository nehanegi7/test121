import React from 'react'
import Loginpage from './Loginpage';
import Mainpage from './Mainpage'


import { Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      
      <Switch>
        <Route exact path="/" component={Mainpage}/>
        <Route exact path="/loginpage" component={Loginpage}/>
      </Switch>
    </>
  ) 
  } 

export default App


