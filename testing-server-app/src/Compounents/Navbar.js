import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
function NavBar() {
    return(

        <>



            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <Link to="/Products" className="navbar-brand" style={{color:'rgba(0, 0, 255, 0.689)'}}><FaShoppingCart/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Products">Home</Link>
                    </li>            
                </ul>
                </div>
            </div>
            </nav>
        </>

    )
}

export default NavBar;