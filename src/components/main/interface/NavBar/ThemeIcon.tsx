import { useDispatch } from "react-redux"
import { toggleDarkMode } from "../../../../App/AppSlice"
const ThemeIcon = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(toggleDarkMode())}>
            T
        </button>
    )
}

export default ThemeIcon