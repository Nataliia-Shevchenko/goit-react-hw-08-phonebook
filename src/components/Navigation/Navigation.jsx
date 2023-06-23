import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    const isAuth = useSelector(state => state.auth.token);
    return (
        <>
        <nav>
            <NavLink to='/'> Home </NavLink>
            {isAuth && (<NavLink to='/contacts'>Phonebook</NavLink>) }
        </nav>

        </>
    )
}