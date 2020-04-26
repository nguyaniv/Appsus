const { NavLink } = ReactRouterDOM


export function NavBar(props) {
    return <nav>
        <ul>
            <li><NavLink exact to='/keep'>keep</NavLink></li>
            <li><NavLink to='/email'>Email</NavLink></li>
        </ul>
    </nav>

}
