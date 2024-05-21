/*JS is simply a scripting language, adding functionality into your website. JSX is an addition to
 the JavaScript syntax which is a mixture of both HTML and JavaScript.
 Both JS and JSX are interchangeable but JSX makes the code easier to understand for users */

/*JS is a programming language used for creating both frontend and backend applications. - 
JSX: It is a syntax extension for JavaScript, often used with React.
 JSX allows you to write HTML elements and components in a syntax that looks similar to XML or HTML */
 import data from './data'
 import './Style.css'
 import {useState} from 'react'
export default function Accordian(){
    const [set,upset]=useState('')
    function handletitle(getCurr){
   upset(getCurr===set ? null:getCurr);
    }
    console.log(set)
    return (
       <>
       <div className='Wrapper'>
        <button>Enable All</button>
        <div className='Accordian'>
            {
                data && data.length >0 ?
                data.map((item)=><div className='item'>
                    <div onClick={()=>handletitle(item.id)} className='title'>
                        <h2>{item.question}</h2>
                        <span>*</span>
                    </div>
                    {
                        set===item.id ? <div className='content'>{item.answer}</div> : null
                    }
                </div>)

                 : <h3>data not avaiable !</h3>
            }

        </div>

       </div>
       </>
    )
}