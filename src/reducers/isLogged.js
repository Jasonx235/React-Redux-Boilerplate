const loggedReducer = (state = false, action) =>{
    switch(action.type){
        case "SIGN_IN":
            return state = action.status;
        case "SIGN_OUT":
            return state = action.status;
        default:
            return state;
    }
}

export default loggedReducer;