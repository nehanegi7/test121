import React, { useState } from 'react'
import './App.css'
import bluebird from './bluebird.png'

function Loginpage() {
    const [inputData, setinputData] = useState({ name:"", Email:"", Password:"" });
    // const [inputPassword, setinputPassword] = useState('');
    //const [inputEmail, setinputEmail] = useState('');

    const newFunction = () => {
        console.log(inputData);
        //create array 
        // var   ara1=[1,2]
        //var ar2=[...ara1,3,4]                //...speed operator
        //Data store in local storage
        
        const nameobj={                        // create an object
            name:"sahil",
            last:"watson",
            age:23
        }

        const {name, age}=nameobj;      //array desructor
        
        console.log("value of first detail",name,age);
        console.log("new value",nameobj);// 2 type of destructuring array,  object
        localStorage.setItem('detail', JSON.stringify(inputData));
     
        //  let a=8; 
        //  var a=6;
        //  console.log("value of a",a)
        //get data from local storage
        var items = JSON.parse(localStorage.getItem('detail'));
        console.log('items checked',items);
        console.log(items.name);          //value access here (name)
        console.log(items.Password);       //value access here(password)
       // var item = [items];
        //console.log('new item checked',item);
        //remove data from local storage

    // localStorage.removeItem('detail');

        //localStorage.setItem('USERNAME',JSON.stringify(inputData));
        //localStorage.setItem('EMAIL', JSON.stringify(inputEmail));
        //localStorage.setItem('ENTER YOUR PASSWORD', JSON.stringify(inputPassword));
    }
    return (

        <div className="login">
            <div className='log_in'>
                <img src={bluebird} alt="" />
                <h2>Log in to Twitter</h2>
                <input type="text" placeholder="username" id="username"
                    value={inputData.name} onChange={(e) => setinputData({ ...inputData, name: e.target.value })}
                    required />
                <input type="text" placeholder="Email address" id="email address"
                    value={inputData.Email} onChange={(e) => setinputData({ ...inputData, Email: e.target.value })}
                    required />
                <input type="Password" placeholder="Password" id="password" required
                    value={inputData.Password} onChange={(e) => setinputData({ ...inputData, Password: e.target.value })}
                />
                <button onClick={newFunction}>Sign up</button>
            </div> 
        </div>
    )
}
export default Loginpage;
