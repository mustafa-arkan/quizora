import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Homecard from '../components/Homecard/Homecard';






const Home = () => {

const homes=useLoaderData().data



    return (
        
        <div>
           
           <h2>I have home: {homes.length}</h2>

{

homes.map(home=><Homecard

key={home.id}

home={home}

></Homecard>)

}










        </div>
    );
};

export default Home;