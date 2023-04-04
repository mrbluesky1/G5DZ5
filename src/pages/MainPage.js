import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {addNumberAction, deleteAllAction} from "../redux/actions";

export default function MainPage() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const {number, count} = useSelector(state => state.numbersReducer)

    const addNumber = () => {
        dispatch(addNumberAction(input))
        setInput("")
    }

    const deleteAll = () => {dispatch(deleteAllAction())}

    return(
        <>
            <input value={input} type="number" onChange={(event) => setInput(event.target.value)}/>
            <button onClick={addNumber}>Add</button>
            <button onClick={deleteAll}>Clear</button>
            <h3>{number}</h3>
            <h3>{count}</h3>
        </>
    )
}