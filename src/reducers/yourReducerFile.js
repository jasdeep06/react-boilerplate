const initialReducerState = {
    loader:false
}

export default (state = initialReducerState,action) =>{
    switch(action.type){
            case('ENABLE_LOADER_ACTION'):
                return {...state,loader:true}
            case('DISABLE_LOADER_ACTION'):
                return {...state,loader:false}
        

            default:
                return state;
        }
}