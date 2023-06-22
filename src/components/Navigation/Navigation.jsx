import { NavLink } from "react-router-dom"

export const Navigation = () => {

    return (
        <>
        <nav>
            <NavLink to='/'> Home </NavLink>
            {/* {isLogged && (<NavLink to='/contacts'>Phonebook</NavLink>) } */}
        </nav>

        </>
    )
}