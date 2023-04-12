import decreaseIt from "./Decrease"

const initialState = {
    CurrentNumber : 20
}

const Reducer = (state= initialState, action) => {
    switch(action.type){
        case decreaseIt: return {
            ...state, CurrentNumber: state.CurrentNumber-1
        }
        default: return state
    }

}
export default Reducer;