import React from 'react'
import Input from '@mui/material/Input'
import Divider from '@mui/material/Divider'
import AddIcon from '@mui/icons-material/Add';
import {useEffect,useRef,useContext} from 'react'
import {fetchItems,clickEvent, addItem, saveHistory } from '../../context/actions';
import {ItemsContext} from '../../context/itemsProvider'

const Home = () => {
    const inputRef = useRef(null)
    const {items,selectedItems,isSearched,inputVal,totalVal,dispatch} = useContext(ItemsContext)
    useEffect(()=> {
        const getItems = async () => {
            const items = await fetchItems()
            dispatch({type: 'FETCH_DATA', payload: items})
        }
        getItems()
    },[])

    useEffect(() => {
        const listenClickEvent = (e) => {
            clickEvent( e, inputRef, dispatch)
        }
        document.addEventListener("mousedown", listenClickEvent)

        return () => document.removeEventListener("mousedown", listenClickEvent)
    },[isSearched])

    const handleClick = (e) => {
        dispatch({type: 'ADD_INPUT_VAL', payload: e.target.innerText})
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
                                    <p id={id} className="hover:bg-slate-300 cursor-pointer" onClick={handleClick} >{val.type}</p>)}
                            </div>: null 
                        }
                    </div>
                    <button  className="border rounded-lg self-start bg-purple-300 text-white px-2 mx-2 hover:bg-purple-500" onClick={() => {addItem(totalVal, inputVal, items,dispatch,)}}> <AddIcon/>Add Item </button>
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
                        <button className="border border-red-300 px-2 bg-slate-200 text-red-500" onClick={() => {dispatch({type: 'CLEAR'})}}>Clear</button>
                    </div>
                    
                </div>
            </div>
            <div className="self-end">
                <button  className="border rounded-lg self-start bg-purple-300 text-white px-2 mx-2 hover:bg-purple-500 m-2" onClick={() => {saveHistory(selectedItems,dispatch)}}> Save </button>
            </div>
        </div>
    )
}

export default Home