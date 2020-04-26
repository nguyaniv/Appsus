const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const history = History.createBrowserHistory()
import { MissKeep } from './pages/MissKeep.jsx'
import { MissEmail } from './pages/MissEmail.jsx'




export class App extends React.Component {

    render() {
        return (
            <Router >
                <header>
                    <h1>Cars R Us</h1>
                </header>
                <main>
                    <Switch>
                        <Route component = {MissKeep} path ='/keep'></Route>
                        <Route component = {MissEmail} path ='/email'></Route>
                   </Switch>
                   
                     
                </main>
                    <footer>
                        coffeerights 2020 &copy;
                </footer>
            </Router>
        )
    }
}