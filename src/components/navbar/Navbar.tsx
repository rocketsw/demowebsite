//import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    return (
        < div className="navbar" >
            <span className="active">Home</span>
            <span>Link</span>
            <span>Link</span>
            <span className="right">Link</span>
            {/*}
            <Link to="#" className="active">Home</Link>
            <Link to="#">Link</Link>
            <Link to="#">Link</Link>
            <Link to="#" className="right">Link</Link>
    */}
        </div >
    )
}