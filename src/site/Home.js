import React from "react";
import ImageBannerLarge from "../components/imagebanner-large";
import Trending from "../components/Trending";


function Home() {
    return (
        <div className="home">
            <ImageBannerLarge />
            <Trending />
        </div>
    )
}

export default Home