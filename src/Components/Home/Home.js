import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics=useLoaderData();
    
    return (
        <div className='grid md:grid-cols-4 gap-5 m-12 grid-cols-1'>
           {
            topics.data.map(topic=>{
                return <Topics key={topic.id} topic={topic}></Topics>
            })
           } 
        </div>
    );
};

export default Home;