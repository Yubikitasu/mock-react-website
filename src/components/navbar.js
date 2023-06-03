import {React, useState} from "react";
import "../App.css"
import { AiOutlineSearch, AiOutlineShopping, AiOutlineCopyrightCircle, AiOutlineUser } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import Cart from "./Cart";
import {OverlayTrigger, Popover} from 'react-bootstrap'

function Navbar() {
    const [open, setOpen] = useState("hidden")
    const popover = (
        <Popover id="popover-basic" style={{backgroundColor: "black", color: "white", padding: "20px", width: "300px", border: "1px solid white", zIndex: "1", borderRadius: "3px", maxHeight: "600px", overflow: "auto"}}>
          <Popover.Body>
            <Cart />
          </Popover.Body>
        </Popover>
    );
    function openNavbarMobile() {
        if (open == "hidden") {
            setOpen("open")
        } else if (open == "open") {
            setOpen("hidden")
        }
    }
    return (
            <div className="navbar">
            <div className="navbar-brand">
                <Link to="/mock-react-website/">Vouis Le Trouix</Link>
            </div>
            <div className="navbar-links">
                <Link to="/mock-react-website/news"><div className="navbar-link-content">What's new</div></Link>
                <Link to="/mock-react-website/shirts"><div className="navbar-link-content">Shirts</div></Link>
                <Link to="/mock-react-website/trousers"><div className="navbar-link-content">Trousers</div></Link>
                <Link to="/mock-react-website/handbags"><div className="navbar-link-content">Handbags</div></Link>
                <Link to="/mock-react-website/men"><div className="navbar-link-content">Men</div></Link>
                <Link to="/mock-react-website/women"><div className="navbar-link-content">Women</div></Link>
                <Link to="/mock-react-website/children"><div className="navbar-link-content">Children</div></Link>
            </div>
            <div className="navbar-signup">
                <Link to="/mock-react-website/contact"><div className="navbar-link-content">Contact</div></Link>
                <Link to="/mock-react-website/login"><div className="navbar-link-content">Login</div></Link>
                <Link to="/mock-react-website/signup"><div className="navbar-link-content">Sign up</div></Link>
                <div className="navbar-link-content"><AiOutlineSearch /></div>
                <div className="navbar-link-content"><AiOutlineUser /></div>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <div className="navbar-link-content"><AiOutlineShopping /></div>
                </OverlayTrigger>
            </div>
            {/* Mobile */}
            <div className="navbar-list-shortened" onClick={() => openNavbarMobile()}>
                <div className="navbar-link-content"><BiMenuAltRight /></div>
            </div>
            <div className={`navbar-list-mobile ${open}`} style={{textAlign: "center"}}>
                <div className={`list-mobile`}>
                        <li><Link to="/mock-react-website/news">What's new</Link></li>
                        <li><Link to="/mock-react-website/shirts">Shirts</Link></li>
                        <li><Link to="/mock-react-website/trousers">Trousers</Link></li>
                        <li><Link to="/mock-react-website/handbags">Handbags</Link></li>
                        <li><Link to="/mock-react-website/men">Men</Link></li>
                        <li><Link to="/mock-react-website/women">Women</Link></li>
                        <li><Link to="/mock-react-website/children">Children</Link></li>
                        <li><Link to="/mock-react-website/contact">Contact</Link></li>
                        <li><Link to="/mock-react-website/login">Login</Link></li>
                        <li><Link to="/mock-react-website/signup">Sign Up</Link></li>
                        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%"}}>
                            <li><Link to="/mock-react-website/"><AiOutlineSearch /></Link></li>
                            <li><Link to="/mock-react-website/"><AiOutlineUser /></Link></li>
                            <li><Link to="/mock-react-website/"><AiOutlineShopping /></Link></li>
                        </div>
                </div>
            </div>
            </div>
    )
}

export default Navbar