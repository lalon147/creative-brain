import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const Quiz = () => {
    const data=useLoaderData()
    
    return (
        <div>
              <div className='bg-slate-600 flex justify-center items-center m-10 rounded-lg'>
                     <h1 className='text-3xl text-center'>WelCome to {data.data.name} Quiz</h1>
                     <img src={data.data.logo} alt="" className='w-12'/>
              </div>
               <div className='bg-slate-500 mx-10 p-10 rounded-lg'>

                    
                         {
                            data.data.questions.map(question=>{
                                return  <Questions key={question.id} question={question}></Questions>
                                
                            })
                          }
                    
              </div>
        </div>
    );
};

export default Quiz;