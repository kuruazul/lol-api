import Home from './pages/home/About'
import Nav from './sections/Nav'
import Champs from './pages/champs/Index'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import { ListProvider } from '../Contexts/List'
const Pages=()=>{
    return(
        <Router>
            <Route exact path={"/"} component={Home} />
            <ListProvider>
            <Route exact path={"/Champs"} component={Champs}/>
            </ListProvider>
        </Router>
    )
}
const Container = () => {
    return(
        <>
            <Nav/>
            <Pages/>
        </>
    )    
}

export default Container