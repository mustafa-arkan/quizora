import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const CardDetails = () => {
const questions=useLoaderData().data.questions




//console.log(questions)

return (
<div> 

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