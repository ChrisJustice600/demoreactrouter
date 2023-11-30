import { NavLink } from "react-router-dom"

export default function NavBar(){

    return(
        <nav>
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
            </ul>
      </nav>
    )
}
