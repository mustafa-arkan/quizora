import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Options from '../Options/Options';


const Questions = () => {
    //console.log(singlequestion)





//const options=useLoaderData().data.questions

const options=useLoaderData().data.questions

    return (

        <div>
            
{/* <p>Question:{question}</p> */}

{

options.map(opt=><Options


opt={opt}

></Options>)




}





        </div>
    );
};

export default Questions;