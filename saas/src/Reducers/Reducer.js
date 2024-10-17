 const initialState = {
    button : false
 } 
 export const Reducers = (state = initialState, action)=>{
    switch(action.type){
        case 'BUTTON':
        return {...state , button: true}
        default:
        return state
    }
}