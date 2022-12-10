
export const fetchItems = async () => {
    const response = await fetch('http://localhost:8000/items')
    const items = response.json()
    return items        
}

export const clickEvent = (e, inputRef,dispatch) => {
    if(inputRef.current.contains(e.target)){
        dispatch({type: 'SEARCHING'})
    }
}

export const addItem = (totalVal, inputVal, items,dispatch) => {
    let sum = totalVal
    if(inputVal){
        items.map((val) => {
            if(val.type === inputVal){
                sum += val.price
                const details = [{type: val.type, price: val.price, date: new Date().toString()}]
                dispatch({type: 'ADD_SELECTED_ITEMS', payload: {details,sum}})
            }
        })
    }
}

export const saveHistory = (selectedItems, dispatch) => {
    selectedItems.map((val) => {
        fetch('http://localhost:8000/history', {method: 'POST', headers: {'Content-type': 'application/json'}, body:JSON.stringify(val)})
            .then(res => res.json())
    })
    dispatch({type: 'CLEAR'})
}