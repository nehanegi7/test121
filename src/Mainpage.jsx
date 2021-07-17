import React from 'react'
import { Link } from 'react-router-dom'
import Bird from './Bird.png'
import bluebird from './bluebird.png'
import whitebird from './whitebird.png' 
import './App.css';

import Mainpage from './Mainpage'
import Loginpage from './Loginpage';

//import {RouteChange} from 'react-router-dom';

function mainpage() {
//RouteChange=()=> {
    //let path = `newPath`;  
    //let history = useHistory();
   // history.push(path);
  //localStorage.setItem('name','inputData')
//}

    return (
<>
      <div className="mainpage">
      <div className="image"><img src={Bird} alt='Bird' className="bird" />
      <img src={whitebird} alt="" className="whitebird"/>
      </div> 
      <div className='enter'>
      <img src={bluebird} alt=""/>
      <h1>Happening now</h1> 
      <h5>Join Twitter today.</h5>
      
      <Link to="/"><button>Sign up</button></Link> 
      <Link to="/loginpage"><button>Log in</button></Link>            
      </div>
      </div>
      </>
    )
}

export default mainpage;
