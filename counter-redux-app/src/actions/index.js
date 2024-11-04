import { type } from "@testing-library/user-event/dist/type"

 export const incNum=()=>{
return{

    type:'INCREMNET'
}

}
export const decNum=()=>{
    return{

        type:'DECREMNET'
    }
}
export const addNum=(num)=>{
    return{

        type:'ADDBY',
        payload:num
    }
}

export const divideNum=()=>{
    return{

        type:'DIVIDE'
    }
}

export const multiNum=()=>{
    return{

        type:'MULTIPLY'
    }
}
