import React from 'react';

const Questions = ({singlequestion}) => {
    console.log(singlequestion)

const{question}=singlequestion

    return (

        <div>
            
<p>Question:{question}</p>







        </div>
    );
};

export default Questions;