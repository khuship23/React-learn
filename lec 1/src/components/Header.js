import { LOG_URL } from "../../utils/constants";

const Header =() => {
    let btnName = "login";
    
    return(

        <div className = "header">
            <div className="logo-container">
                <img className= "logo" src= {LOG_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {btnName ="Logout"}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;