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
                <Link to="./">Vouis Le Trouix</Link>
            </div>
            <div className="navbar-links">
                <Link to="./news"><div className="navbar-link-content">What's new</div></Link>
                <Link to="./shirts"><div className="navbar-link-content">Shirts</div></Link>
                <Link to="./trousers"><div className="navbar-link-content">Trousers</div></Link>
                <Link to="./handbags"><div className="navbar-link-content">Handbags</div></Link>
                <Link to="./men"><div className="navbar-link-content">Men</div></Link>
                <Link to="./women"><div className="navbar-link-content">Women</div></Link>
                <Link to="./children"><div className="navbar-link-content">Children</div></Link>
            </div>
            <div className="navbar-signup">
                <Link to="./contact"><div className="navbar-link-content">Contact</div></Link>
                <Link to="./login"><div className="navbar-link-content">Login</div></Link>
                <Link to="./signup"><div className="navbar-link-content">Sign up</div></Link>
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
                        <li><Link to="./news">What's new</Link></li>
                        <li><Link to="./shirts">Shirts</Link></li>
                        <li><Link to="./trousers">Trousers</Link></li>
                        <li><Link to="./handbags">Handbags</Link></li>
                        <li><Link to="./men">Men</Link></li>
                        <li><Link to="./women">Women</Link></li>
                        <li><Link to="./children">Children</Link></li>
                        <li><Link to="./contact">Contact</Link></li>
                        <li><Link to="./login">Login</Link></li>
                        <li><Link to="./signup">Sign Up</Link></li>
                        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%"}}>
                            <li><Link to="./"><AiOutlineSearch /></Link></li>
                            <li><Link to="./"><AiOutlineUser /></Link></li>
                            <li><Link to="./"><AiOutlineShopping /></Link></li>
                        </div>
                </div>
            </div>
            </div>
    )
}

export default Navbar