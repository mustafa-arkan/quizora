import React from 'react';
import { useLoaderData } from 'react-router-dom';




const CardDetails = () => {
const home=useLoaderData().data



    return (


        <div>
            
<h2>Quiz of {home.name}</h2>




        </div>
    );
};

export default CardDetails;