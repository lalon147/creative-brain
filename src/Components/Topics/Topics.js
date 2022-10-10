import React from 'react';
import { Link } from 'react-router-dom';
import "./Topics.css"

const Topics = (props) => {
   const {name,logo,total,id}=props.topic;
   const link=`/quiz/${id}`
   console.log(logo)
    return (
        <div className='bg-blue-100 p-7 rounded-md shadow-2xl'>
            
            <img src={logo} alt="" />
            <h1 className='text-2xl'>Topic:{name}</h1>
            <h1>Quizes:{total}</h1>
            <div className='my-4'>
            <Link  to={link} className='bg-slate-600 p-2 rounded-lg  hover:bg-slate-800 hover:font-bold'>Start Grinding</Link>
            </div>
        </div>
    );
};

export default Topics;