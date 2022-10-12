import React from 'react';
import { Link } from 'react-router-dom';




const Homecard = ({home}) => {

const {id,name,logo,total}=home

    return (

        


<div className=' container card-group '>


<div className="card   mb-3 col-md-3 bg-success p-2 text-dark bg-opacity-10 d-flex flex-row  container ">
  <div className="row g-0 ">
    <div className="col-md-4">
      <img src={logo} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <p>Total quiz:{total}</p>

{/* <h2><Link to={`/home/${id}`}>Start Quiz</Link></h2> */}


        <button type="button" className="btn text-dark bg-warning btn-outline-warning"><Link to={`/home/${id}`}>Start Quiz</Link></button>
        
      </div>
    </div>
  </div>
</div>

            
        </div>



      
    );
};

export default Homecard;