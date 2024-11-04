const initialState=0;

const changeNum=(state=initialState, action)=>{
switch(action.type){
    case "INCREMNET":return state+1
    case "DECREMNET":return state-1
    case "ADDBY":return state+action.payload
    
    default :return state;

}
}
export default changeNum;