import React, { useState } from 'react';
import Toasted from '../Toasted/Toasted';



const Questions = (props) => {
const [showAnswer,setShowAnswer]=useState("")
    const question=props.question;
    console.log(question);
     const correctOrNot=(option)=>{
           if(question.correctAnswer===option){
            console.log("clicked");
                <Toasted/>
           }
           else{
                 
           }
     }

     const handleShowAnswer=()=>{
                setShowAnswer(question.correctAnswer)
     }
    
    
    
    return (
        <div className='bg-slate-200 border-2 my-10 p-5 rounded-lg'>
              <div className='question text-xl'>
                 <button className='eye sticky block' onClick={()=>{
                    handleShowAnswer()
                 }}>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
</svg>

                 </button>
                 <h1 className='text-xl'>Answer:{showAnswer}</h1>
               Question:<span className='font-bold'>{question.question}</span>
              </div>
              <div className='options grid grid-cols-1 gap-5 pt-4'>
                {
                    question.options.map(option=>{
                      return  <button onClick={()=>{
                          correctOrNot(option)
                      }} className='bg-slate-400 p-2 rounded-lg font-bold text-xl'>{option}</button>
                    })
                }
              </div>

              
        </div>
    );
};

export default Questions;