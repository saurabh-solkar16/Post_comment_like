import React from 'react';
import './css/login.css'

export default class login extends React.Component{
    render(){
        return(

         <div className="centerMe">
         <h3>Login Please</h3>
<input type="text" className="form-control" placeholder="username"/>
<br/>
<input type="password" className="form-control" placeholder="username"/>
<br/>

<button className="btn btn-primary form-control">Submit</button>
<a href="/register" >register now</a>    
     
         </div>
        )
    }
}