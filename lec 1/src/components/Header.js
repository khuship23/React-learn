import { LOG_URL } from "../../utils/constants";
import { useState } from "react";

const Header =() => {
    // let btnName = "login";
    const [btnNameReact, setBtnNameReact] = useState("Login");
    // if it is const then who its value is change because react will rerender and change the value to updated
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
                    <button className="login" onClick={() => {
                         btnNameReact === 'Login'? setBtnNameReact("Logout") :setBtnNameReact("Login");
                        console.log(btnNameReact);
                        }}>{btnNameReact}</button>
                        {/* //it will rerender the whole header components while using usestate */}
                </ul>
            </div>
        </div>
    )
};

export default Header;