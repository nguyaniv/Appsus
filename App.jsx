const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const history = History.createBrowserHistory()
import { MissKeep } from './pages/MissKeep.jsx'
import { MissEmail } from './pages/MissEmail.jsx'
import { NavBar } from './cmps/NavBar.jsx'
import { Home } from './pages/Home.jsx'


export class App extends React.Component {

    render() {
        return (
            <Router >
                <header className="main-header container flex space-between align-center">
                    <h1 className="logo">Appsus.</h1>
                    <NavBar></NavBar>
                </header>
                <main className="main-content">
                    <Switch>
                        <Route component={MissKeep} path='/keep'></Route>
                        <Route component={MissEmail} path='/email'></Route>
                        <Route component={Home} path='/home'></Route>
                        <Route component={Home} path='/'></Route>
                    </Switch>
                </main>
                <footer className="main-footer">
                    copyrights 2020 &copy;
                </footer>
            </Router>
        )
    }
}
