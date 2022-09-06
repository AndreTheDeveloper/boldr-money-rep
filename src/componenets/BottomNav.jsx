import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import socialMedia from '../Images/socialMedia.png'
class BottomNav extends Component{
render(){
    return(
        <div className = 'bottomNavContainer'>
            <div className = 'bottomNavTitle'>
                <h2>Talk to a Coach</h2>
                <p>Book a free consultation with one of our coaches</p>
                <button className = 'bottomNavButton'>
                    <NavLink to = '/BookACall' className = 'navlinkbutton'>
                        Book a Free Call
                    </NavLink>
                </button>
            </div>
            <div className = 'bottomNavGrid'>
                <div className = 'bottomNavGridLeft'>
                    <h1>Bolder</h1>
                    <h2>coaches@boldermoney.com</h2>
                    <h3>+1 (347) 418-0923</h3>
                    <img src = {socialMedia} alt = {'Social Media'}></img>
                    <p>© 2022 Bolder Money Moves</p>
                </div>
                <div className = 'bottomNavGridMid'>
                    <a>
                    <NavLink className = 'navlink1' to = '/'>
                        Home  
                    </NavLink>
                    </a>
                    <a>
                    <NavLink to = '/OurStory' className = 'navlink1'>
                        Our Story
                    </NavLink>
                    </a>
                    <a>
                    <NavLink to = '/HowItWorks' className = 'navlink1'>
                        How It Works
                    </NavLink>
                    </a>
                    <a>
                    <NavLink to = '/NoFilter' className = 'navlink1'>
                        #nofilter
                    </NavLink>
                    </a>
                    <a>
                    <NavLink to = '/JoinBolder' className = 'navlink1'>
                        Join Bolder
                    </NavLink>
                    </a>
                    <a>
                    <NavLink to = '/BookACall' className = 'navlink1'>
                        Book a Call
                    </NavLink>
                    </a>
                </div>
                <div className='bottomNavGridRight'>
                    <h2>No BS.Just good emails</h2>
                    <form>
                        <input className = 'emailForm' type = 'email' placeholder = 'Email Address' name = 'email' />
                        <input className = 'emailFormButton' type = 'submit' value = '→' />
                    </form>
                    <div className = 'footerGrid'>
                        <div className = 'footerGridRight'>
                            <p>Privacy Policy</p>
                        </div>
                        <div className = 'footerGridLeft'>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    

}
}


export default BottomNav