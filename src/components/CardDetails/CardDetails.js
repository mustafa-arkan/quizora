import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';



const CardDetails = () => {

// const home=useLoaderData().data
//console.log(home)


const questions=useLoaderData().data.questions
return (
<div>
           
{/* <h2>length:{home.questions.length}</h2>
<h2>Quiz of {home.name}</h2>
<h2>Question:{home.questions[0].question} </h2> */}

<h2>I have question: {questions.length}</h2>

{

questions.map(singlequestion=><Questions

    key={singlequestion.id}

singlequestion={singlequestion}

></Questions>)

}






        </div>
    );
};

export default CardDetails;