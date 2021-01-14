const loggedReducer = (state = false, action) =>{
    switch(action.type){
        case "SIGN_IN":
            return state = action.status;
        case "SIGN_OUT":
            return !state;
        default:
            return state = action.status;
    }
}

export default loggedReducer;