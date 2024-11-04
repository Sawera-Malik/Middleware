const initialState=5;

const multi=(state=initialState, action)=>{
switch(action.type){
  
    case "DIVIDE":return state/5
    case "MULTIPLY":return state*5
    default :return state;

}
}
export default multi;