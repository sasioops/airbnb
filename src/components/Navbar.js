import air_logo from '../images/airbnb-logo.png'
import '../App.css';

export default function Navbar(){
    return(
        <nav>
            <img className='nav_logo' src={air_logo}/>
        </nav>
    )
}