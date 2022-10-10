import React from 'react';
import avater from "../../tirtha.jpg"

const Myself = () => {
    return (
        <div className=' bg-slate-600 myself border-solid border-2 border-cyan-400 my-10 p-5 rounded-2xl mx-5 shadow-2xl'>
            <div className='flex items-center bg-slate-500 p-2 rounded-lg'>
                 <img src={avater} className="w-14 rounded-lg" alt="" />
                <div className='ml-3 bg-slate-500 '>
                <h1 className='text-2xl '>Name:Lalon Rahman</h1>
                <h2 className='text-xl'>ID:2598755</h2>
                </div>
            </div>  
            <div>
            
            <h2 className='text-xl'>Score:0</h2>
            <h2 className='text-xl'>Global Rank:2584</h2>

            </div>

        </div>
    );
};

export default Myself;