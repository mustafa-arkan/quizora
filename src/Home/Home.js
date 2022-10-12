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

            {

                homes.map(home => <Homecard

                    key={home.id}

                    home={home}

                ></Homecard>)

            }










        </div>
    );
};

export default Home;