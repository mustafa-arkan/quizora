import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppFooter from '../AppFooter/AppFooter';
import Counter from '../Counter/Counter';
import HeaderBlog from '../HeaderBlog/HeaderBlog'
import QuizGroup from '../QuizGroup/QuizGroup';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <HeaderBlog></HeaderBlog>
            <Counter></Counter>
            <QuizGroup topics={topics}></QuizGroup>
            <AppFooter></AppFooter>
            
        </div>
    );
};

export default Home;