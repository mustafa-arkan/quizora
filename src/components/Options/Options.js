import React from 'react';
import Opt from '../Opt/Opt';



const Options = ({opt}) => {

    const abc=opt.options
   



    return (




        <div className='p-5 m-2 bg-success p-2 text-dark bg-opacity-25'>


            <p>Questions:{opt.question}</p>
            <div className='d-flex col-6'>

{

abc.map(opp=><Opt key={opt.id} opp={opp}>




</Opt>)






}





            </div>
           


        </div>
    );
};

export default Options;