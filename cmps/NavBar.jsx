const { NavLink } = ReactRouterDOM

export function NavBar(props) {
    return <nav>
        <ul class="main-nav flex clean-list">
            <li><NavLink exact to='/keep'>keep</NavLink></li>
            <li><NavLink to='/email'>Email</NavLink></li>
            <li><NavLink to='/home'>Home</NavLink></li>
        </ul>
    </nav>

}
