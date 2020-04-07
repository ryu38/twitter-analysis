import React, { useEffect, useState, Fragment } from 'react';
import "./Card.scss";
import { TwitterTweetEmbed, TwitterVideoEmbed } from "react-twitter-embed";

const Card = (props) => {
    return (
        <div className={"card"} id={"img-" + props.tweetId} >
            <div className={"imgWrapper"}></div>
            <p className={'text'}></p>
        </div>
    )
};

export default Card;