import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Homecard from '../components/Homecard/Homecard';
import logo from '../Images/logo.png'




const Home = () => {

    const homes = useLoaderData().data

    return (

        <div>

            <div className='container bg-success p-2 text-dark bg-opacity-25 mb-5 d-flex '>
                <img src={logo} alt="" className="src w-25" />
                <div>
                    <h1 className='mt-5 me-5'><span className='text-danger'>Q</span>uizzoraa</h1>
                    <p className='text-break me-5 '> Quizzora is a basically programming learning website.Motivate every student to mastery with easy-to-customize content combined with tools for inclusive quiz.</p>

                </div>

            </div>

           <div className='d-flex container  single  '>

           {

homes.map(home => <Homecard

    key={home.id}

    home={home}

></Homecard>)

}


           </div>













<div className='bg-dark parent d-flex mt-5 text-light'>

<div className='d-grid ps-5 '>
<h3>Quizzoraa</h3>
<p>Free Courses with Certificate</p>

<p>Salary Builder</p>
<p>Live Sessions / Webinars</p>
<p>CareerBoost - Jobs for Freshers</p>
<p>Blog</p>
<p>All Free Courses</p>

</div>

<div className='d-grid ms-5 ps-5'>

<h3>About Quizzoraa</h3>
<p>About Us</p>
<p>Quizzora Courses</p>
<p>Our mentors</p>
<p>Enterprise Solutions</p>
<p>Digital Campus</p>
<p>Success Stories</p>

</div>
<div className='d-grid ms-5 ps-5'>

<h3>Quizzoraa Courses</h3>
<p>Javascript</p>
<p>React js</p>
<p>AI & Machine Learning.</p>
<p>Software Engineering</p>

</div>

</div>


        </div>


    );
};

export default Home;