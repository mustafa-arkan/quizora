import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import './Counter.css'


const Counter = () => {

const [counterOn, setCounterOn]=useState(false)

    return (
        <div className='bg-teal-200'>

<ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >




<div className='count' style={{

width:'100%',


padding:'50px',







        }}   >
            
<div>






<h1 className='text-5xl font-bold text-accent-focus htag'>

{counterOn &&    <CountUp start={10000} end={1000} duration={5} delay={0}   ></CountUp>}
+ Quiz   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


{counterOn &&    <CountUp start={20} end={10} duration={5} delay={0} ></CountUp>}
+ Languages &nbsp;&nbsp;&nbsp;&nbsp;

{counterOn &&    <CountUp start={1} end={100000} duration={3} delay={0}></CountUp>}
+ Learners

</h1>










</div>





        </div>
</ScrollTrigger>



        </div>
    );
};

export default Counter;