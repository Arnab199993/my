"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import Posts from './Posts'
import "./PostList.css"
import Pagination from './Pagination'
const PostsList = () => {
    useEffect(()=>{
            axios.get("https://dummyjson.com/todos")   
            .then((data)=>{
              // console.log(data.data.todos)
              setarr(data.data.todos)
              console.log(arr)
               // console.log(arr)
            }).catch((error)=>{
              console.log(error)
            })
          },[])

          const [arr,setarr]=useState([])
  const [pagenumber,setpagenumber] =useState(0)
  const todosperpage=10
  const todosvisited=pagenumber*todosperpage
  const displaytodos= arr.slice(todosvisited,todosvisited+todosperpage).map((ele)=>(
    <div key={ele.id}><Posts todo={ele.todo} Completed={ele.Completed} /></div>
  ))
 const paginate = pageNumber => setpagenumber(pageNumber);
  return (
    <>
     <div className='body'>
     {displaytodos}
     <Pagination
        postsPerPage={todosperpage}
        totalPosts={arr.length}
        paginate={paginate}
      />
     </div>
     </>
  )
}

export default PostsList