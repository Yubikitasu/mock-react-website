import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai"
import { useState } from "react";


export default function Footer() {
    const [open1, setOpen1] = useState("none");
    const [open2, setOpen2] = useState("none");
    const [open3, setOpen3] = useState("none");
    const [open4, setOpen4] = useState("none");
    const [open5, setOpen5] = useState("none");

    function openornot(numbera) {
        if (numbera == "1") {
            if (open1 == "none") {
                setOpen1("block");
            } else if (open1 == "block") {
                setOpen1("none");
            }
        }
        else if (numbera == "2") {
            if (open2 == "none") {
                setOpen2("block");
            } else if (open2 == "block") {
                setOpen2("none");
            }
        }
        else if (numbera == "3") {
            if (open3 == "none") {
                setOpen3("block");
            } else if (open3 == "block") {
                setOpen3("none");
            }
        }
        else if (numbera == "4") {
            if (open4 == "none") {
                setOpen4("block");
            } else if (open4 == "block") {
                setOpen4("none");
            }
        }
        else if (numbera == "5") {
            if (open5 == "none") {
                setOpen5("block");
            } else if (open5 == "block") {
                setOpen5("none");
            }
        }
    }
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="col-1">
                    <ul>
                        <li>Shop and Learn</li>
                        <li><Link to="./">What's new</Link></li>
                        <li><Link to="./">Shirts</Link></li>
                        <li><Link to="./">Trousers</Link></li>
                        <li><Link to="./">Handbags</Link></li>
                        <li><Link to="./">Men</Link></li>
                        <li><Link to="./">Women</Link></li>
                        <li><Link to="./">Children</Link></li>
                        <li><Link to="./">Gifts</Link></li>
                        <li><Link to="./">Safety Precautions</Link></li>
                    </ul>
                </div>
                <div className="col-1">
                    <ul>
                        <li>Vouis Le Trouix Stores</li>
                        <li><Link to="./">Find a store</Link></li>
                        <li><Link to="./">Support</Link></li>
                        <li><Link to="./">Refurbish and Renew</Link></li>
                        <li><Link to="./">Authentication</Link></li>
                        <li><Link to="./">Financing</Link></li>
                        <li><Link to="./">Order Status</Link></li>
                        <li><Link to="./">Account Status</Link></li>
                        <li><Link to="./">Help</Link></li>
                    </ul>
                </div>
                <div className="col-1">
                    <ul>
                        <li>For Business</li>
                        <li><Link to="./">Stores and Clients</Link></li>
                        <li><Link to="./">Reseller's Certification</Link></li>
                        <li><Link to="./">Contact for Business</Link></li>
                    </ul>
                    <ul>
                        <li>Donations and Healthcare</li>
                        <li><Link to="./">For Ukraine</Link></li>
                        <li><Link to="./">Helping the Needs</Link></li>
                        <li><Link to="./">Donation</Link></li>
                    </ul>
                </div>
                <div className="col-1">
                    <ul>
                        <li>At Vouis Le Trouix</li>
                        <li><Link to="./">Terms Of Services</Link></li>
                        <li><Link to="./">Jobs at Vouis Le Trouix</Link></li>
                        <li><Link to="./">Education</Link></li>
                        <li><Link to="./">Working Environment</Link></li>
                        <li><Link to="./">Sources of Clothing</Link></li>
                        <li><Link to="./">Safety at Vouis Le Trouix</Link></li>
                    </ul>
                </div>
            </div>
                <div className="line"></div>
                <div className="copyright-section">
                <div className="copyright">
                    Copyright © 2023 Vouis Le Trouix. All rights reserved.
                </div>
            </div>
            <div className="footer-mobile">
                <div className="list-opener" onClick={() => openornot("1")}>Shop and Learn <AiFillCaretDown /></div>
                <div className="list-mobile" style={{display: `${open1}`}}>
                        <li><Link to="./">What's new</Link></li>
                        <li><Link to="./">Shirts</Link></li>
                        <li><Link to="./">Trousers</Link></li>
                        <li><Link to="./">Handbags</Link></li>
                        <li><Link to="./">Men</Link></li>
                        <li><Link to="./">Women</Link></li>
                        <li><Link to="./">Children</Link></li>
                        <li><Link to="./">Gifts</Link></li>
                        <li><Link to="./">Safety Precautions</Link></li>
                </div>
                <div className="list-opener" onClick={() => openornot("2")}>Vouis Le Trouix Stores <AiFillCaretDown /></div>
                <div className="list-mobile" style={{display: `${open2}`}}>
                    <li><Link to="./">Find a store</Link></li>
                    <li><Link to="./">Support</Link></li>
                    <li><Link to="./">Refurbish and Renew</Link></li>
                    <li><Link to="./">Authentication</Link></li>
                    <li><Link to="./">Financing</Link></li>
                    <li><Link to="./">Order Status</Link></li>
                    <li><Link to="./">Account Status</Link></li>
                    <li><Link to="./">Help</Link></li>
                </div>
                <div className="list-opener" onClick={() => openornot("3")}>For Business <AiFillCaretDown /></div>
                <div className="list-mobile" style={{display: `${open3}`}}>
                        <li><Link to="./">Stores and Clients</Link></li>
                        <li><Link to="./">Reseller's Certification</Link></li>
                        <li><Link to="./">Contact for Business</Link></li>
                </div>
                <div className="list-opener" onClick={() => openornot("4")}>Donations and Healthcare <AiFillCaretDown /></div>
                <div className="list-mobile" style={{display: `${open4}`}}>
                        <li><Link to="./">For Ukraine</Link></li>
                        <li><Link to="./">Helping the Needs</Link></li>
                        <li><Link to="./">Donation</Link></li>
                </div>
                <div className="list-opener" onClick={() => openornot("5")}>At Vouis Le Trouix <AiFillCaretDown /></div>
                <div className="list-mobile" style={{display: `${open5}`}}>
                        <li><Link to="./">Terms Of Services</Link></li>
                        <li><Link to="./">Jobs at Vouis Le Trouix</Link></li>
                        <li><Link to="./">Education</Link></li>
                        <li><Link to="./">Working Environment</Link></li>
                        <li><Link to="./">Sources of Clothing</Link></li>
                        <li><Link to="./">Safety at Vouis Le Trouix</Link></li>
                </div>
                <div className="copyright">
                    Copyright © 2023 Vouis Le Trouix. <br></br> All rights reserved.
                </div>
            </div>
        </div>
    )
}