import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const CardDetails = () => {
const questions=useLoaderData().data.questions

const topic=useLoaderData().data


//console.log(questions)

return (
<div> 

<h2>Quiz of : {topic.name}</h2>



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