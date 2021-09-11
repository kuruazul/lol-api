import '../../assets/css/Nav.css'
const Nav = () => {
    return(
    <div className="text-center position-absolute w-100 title-box">
    <div className="position-absolute justify-content-end w-100 row">
        <div className="btn-lang-box position-fixed  w-auto">
            <button className="btn-lang w-auto border border-1 border-warning text-uppercase position-fixed"> en</button>
        </div>
    </div>
    <span className="text-uppercase title-text fs-2">league of legends api</span>
    
    </div>
    )
}

export default Nav