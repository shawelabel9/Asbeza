import React,{useEffect, useState} from 'react' 
import Divider from '@mui/material/Divider'

const History = () => {

    const [history,setHistory] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/history')
            .then(res=> res.json())
            .then(data=> {setHistory(data);setLoading(false);})
    },[])
  return (
    <div className='flex flex-col justify-center mx-auto my-4'>
        <p className='font-bold'>HISTORY</p>
        {
            loading?<div className="flex justify-center items-center">Loading...</div>:
            history? 
            history.map((val,id)=> 
                <div className='flex flex-col gap-2'>
                    <p>{val.date}</p>
                    <Divider/>
                    <div className="flex gap-4">
                        <p>{val.type}</p>
                        <p>${val.price}</p>
                    </div>
                    <Divider className="font-bold"/>
                </div>)
            :null
        }
    </div>
  )
}

export default History