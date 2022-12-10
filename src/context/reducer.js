export const reducer = (state, action) => {
    switch(action.type) {
        case 'SEARCHING':
            return {
                ...state,
                isSearched : true
            }
        case 'FETCH_DATA':
             return {
                ...state,
                items: action.payload
             }
        case 'ADD_INPUT_VAL':
            return {
                ...state,
                inputVal: action.payload
            }
        case 'ADD_SELECTED_ITEMS':
            return {
                ...state,
                selectedItems: state.selectedItems.concat(action.payload.details),
                inputVal: '',
                isSearched: 'false',
                totalVal: action.payload.sum
            }
        case 'CLEAR_INPUT_VAL':
            return {
                ...state,
                inputVal: '',
            }
        case 'CLEAR':
            return {
                ...state,
                selectedItems: [],
                totalVal: 0
            }
        default: 
            return 
    }
}