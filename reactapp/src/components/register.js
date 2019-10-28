import React from 'react';
import './css/login.css'

export default class Register extends React.Component{
    render(){
        return(

         <div className="centerMe">
         <h3>Register Please</h3>
<input type="text" className="form-control" placeholder="name"/>
<br/>
<input type="text" className="form-control" placeholder="email"/>
<br/>
<input type="text" className="form-control" placeholder="password"/>
<br/>
<button className="btn btn-primary form-control">Register</button>
     
     
         </div>
        )
    }
}