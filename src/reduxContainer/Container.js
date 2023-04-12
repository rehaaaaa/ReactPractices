import { useDispatch, useSelector } from "react-redux"
import DecrementNumber from "./Action"


const Container = () => {
    const CurrentNo = useSelector(state=>state.CurrentNumber)
    const dispatch = useDispatch()
    return(
        <>
        <div>
            <h2>You Clicked {CurrentNo} times.</h2>
            <button onClick={()=>dispatch(DecrementNumber())}>Decrement</button>
        </div>
        </>
    )
}
export default Container;