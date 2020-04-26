const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const history = History.createBrowserHistory()
import { MissKeep } from './pages/MissKeep.jsx'
import { MissEmail } from './pages/MissEmail.jsx'
import {NavBar} from './cmps/NavBar.jsx'
import {Home} from './pages/Home.jsx'


export class App extends React.Component {

    render() {
        return (
            <Router >
                <header>
                    <h1>Appsus is us</h1>
                    <NavBar></NavBar>
                </header>
                <main>
                    <Switch>
                        <Route component = {MissKeep} path ='/keep'></Route>
                        <Route component = {MissEmail} path ='/email'></Route>
                        <Route component = {Home} path ='/home'></Route>
                   </Switch>
                   
                     
                </main>
                    <footer>
                        coffeerights 2020 &copy;
                </footer>
            </Router>
        )
    }
}