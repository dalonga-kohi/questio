import { useDispatch } from "react-redux"
import { clearContents, initContents } from "../QuestPanelSlice"
import { useEffect } from "react"

const Editor = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initContents())
    }, [])
    return (
        <div className="mt-4">
            <button onClick={() => dispatch(clearContents())}>Clear</button>
        </div>
    )
}

export default Editor