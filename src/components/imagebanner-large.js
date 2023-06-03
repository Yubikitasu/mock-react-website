import React from "react";
import {Link} from 'react-router-dom'
import { ImageBannerLargeList } from "../helpers/imagebannerlargelist";

function ImageBannerLarge() {
    return (
        <div>
            {ImageBannerLargeList.map((item, key) => {
                return (
                    <div className="imagebannerlarge">
                        <img className="imagebanner" src={item.image}></img>
                        <div className="imagebannercontent">
                            <div style={{maxWidth: "90%"}}>
                                <div className="title">{item.title}</div>
                                <div className="paragraph">{item.description}</div>
                                <div className="centered">
                                    <Link to={item.link} style={{textDecoration: "none"}}><div className="button">{item.button}</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ImageBannerLarge;