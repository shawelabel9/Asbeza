import React from 'react'
import Input from '@mui/material/Input'
import Divider from '@mui/material/Divider'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import {useState,useEffect,useRef} from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Home = () => {
    const [items,setItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [isSearched,SetIsSearched] = useState(false)
    const [inputVal,setInputVal] = useState('')
    const [totalVal,setTotalVal] = useState(0)
    const inputRef = useRef(null)
    const pRef = useRef(null)

    useEffect(()=> {
        fetch('http://localhost:5000/items')
            .then((res) => res.json())
            .then(data => setItems(data))
    },[])

    useEffect(() => {
        const whereIsItClicked = (e) => {
            if(inputRef.current.contains(e.target)){
                SetIsSearched(true)
            } 
        }
        document.addEventListener("mousedown", whereIsItClicked)

        return () => document.removeEventListener("mousedown", whereIsItClicked)
    },[isSearched])
    const handleClick = (e) => {
        setInputVal(e.target.innerText)
    }
    const addItem = () => {
        let sum = totalVal
        if(inputVal){
            items.map((val) => {
                if(val.type === inputVal){
                    setSelectedItems(prev => prev.concat({type: val.type, price: val.price, date: new Date().toString()}) )
                    sum += val.price
                }
                setInputVal('')
                SetIsSearched(false)
                setTotalVal(sum)
            })
        }

    }

    const saveHistory = () => {
        selectedItems.map((val) => {
            fetch('http://localhost:5000/history', {method: 'POST', headers: {'Content-type': 'application/json'}, body:JSON.stringify(val)})
                .then(res => res.json())
        })
        setSelectedItems([])
        setTotalVal(0)
        
    }

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="flex justify-evenly py-6 md:flex-col gap-10 mx-auto ">
                <div className='flex'>
                    <div className="flex flex-col">
                        <Input className="border" ref={inputRef} value={inputVal} placeholder="Add an item"/>
                    {isSearched ? 
                        <div className="h-40 overflow-scroll flex flex-col">
                            {items.map((val,id)=> 
                                <p id={id} className="hover:bg-slate-300 cursor-pointer" onClick={handleClick} ref={pRef}>{val.type}</p>)}
                        </div>: null }
                    </div>
                    <button  className="border rounded-lg self-start bg-purple-300 text-white px-2 mx-2 hover:bg-purple-500" onClick={addItem}> <AddIcon/>Add Item </button>
                </div>
                <div className="flex gap-4">
                    <div className=" px-2">
                        <p className="font-bold "> Your Items</p>
                        <Divider/>
                        <div className="flex flex-col gap-2">
                            {selectedItems ? selectedItems.map((val,id) => 
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="flex gap-2">
                                        {/* <RadioButtonCheckedIcon/> */}
                                            <p>{val.type}</p>
                                    </div>                
                                    <p>${val.price}</p>

                                    {/* <RemoveCircleIcon className="text-red-500 cursor-pointer" onClick={deleteItem(val.type)}/> */}
                                </div>
                                ):null}
                        </div>
                        {selectedItems ? <div className="flex gap-2 my-2"><p className="font-bold">Total: </p>${totalVal} <p></p></div>:null}
                    </div>
                    <div>
                        <button className="border border-red-300 px-2 bg-slate-200 text-red-500" onClick={() => {setSelectedItems([]); setTotalVal(0);}}>Clear</button>
                    </div>
                    
                </div>
            </div>
            <div className="self-end">
                <button  className="border rounded-lg self-start bg-purple-300 text-white px-2 mx-2 hover:bg-purple-500 m-2" onClick={saveHistory}> Save </button>
            </div>
        </div>
    )
}

export default Home