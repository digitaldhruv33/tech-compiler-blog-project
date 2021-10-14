import React from 'react'
import { useEffect } from 'react'
import { getAllBlog } from '../../api/BlogApi'
import { Link, useLocation } from "react-router-dom";


function Dashboard() {
    const {search} = useLocation()

    useEffect(()=>{
        const fetchAllBlog = async ()=>{
           let data =  await getAllBlog()
           console.log(data)
        }
        fetchAllBlog()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Dashboard
