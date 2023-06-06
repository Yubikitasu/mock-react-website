import React from "react";
import { TrendingMenList } from "../helpers/trendingmenlist";

export default function Trending() {
    return (
        <div className="trending">
            {TrendingMenList.map((item, key) => {
                return (
                    <div className="trending-content">
                        <img src={item.image}></img>
                        <div className="item-content">
                            <div style={{maxWidth: "60%"}}>
                                <h2>{item.name}</h2>
                                <h4>{item.price}</h4>
                                <div className="centered">
                                    <div className="button">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}