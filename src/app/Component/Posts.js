import React from 'react'
import "./Posts.css"
const Posts = (props) => {
  return (
    <div>
         <div >
       
       <p className='Firstdata'>{props.todo}</p>
               <p className='Seconddata'>{props.Completed}</p>
               <p className='ThirdData'>{props.UserId}</p>  
       </div>
    </div>
  )
}

export default Posts