import Home from './pages/home/About'
import Nav from './sections/Nav'
import Champs from './pages/champs/Index'
import { BrowserRouter as Router,Route } from 'react-router-dom'
const Pages=()=>{
    return(
        <Router>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/Champs"} component={Champs}/>
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