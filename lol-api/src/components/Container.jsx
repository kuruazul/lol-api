import Home from './pages/home/About'
import Nav from './sections/Nav'
import Champs from './pages/champs/Index'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import ChampsInfo from './pages/champsInfo/Index'
import NotFound from './pages/NotFound'
const Pages=()=>{
    return(
        <Router>
            <Route exact path={"/"} component={Home} />
            
            <Route exact path={"/Champs"} component={Champs}/>
            <Route exact path={"/Champs/:id"} component={ChampsInfo}/>
         
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