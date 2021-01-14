export const increment = (num) =>{
    return{
            type:"INCREMENT",
            payload: num
    }
}

export const decrement = () =>{
    return{
        type: "DECREMENT"
    }
}

export const logIn = () => {
    return{
        type: "SIGN_IN",
        status: true
    }
}

export const logOut = () => {
    return{
        type: "SIGN_OUT",
        status: false
    }
}