import React from 'react';
import {useSelector,useDispatch} from 'react-redux'


function Abc(){

    var d=useSelector(state => state.value)
    return(
<p>{d}</p>
    )
}



export default class post extends React.Component{



    render(){




        return(
        <div >

       
         <h3>Posts</h3>

         <div class="row">
         <div class="col-lg-4 col-md-4 col-sm-6">
         <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
         </div>

         <div class="col-lg-4 col-md-4 col-sm-6">
         <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
         </div>

         <div class="col-lg-4 col-md-4 col-sm-6">
         <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
         </div>
         </div>
      

     
         </div>
        )
    }
}