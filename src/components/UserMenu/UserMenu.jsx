// import { selectUserName } from "redux/auth/auth-selectors"

import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/auth-operations";

export const UserMenu = () => {
// const {user} = selectUserName()
const dispatch = useDispatch();

const handleLogOut = () => {
dispatch(logOut())
}
    return (
        <div>
            <p>Welcome!</p>
            <button type='button' onClick={handleLogOut}>Log Out</button>
        </div>
    )
}