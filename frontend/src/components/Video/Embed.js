import React, {Component, useEffect, useState} from 'react';
import "./Embed.scss";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Embed = (props) => {

    const tweetSet = () => {
        var container = document.getElementById('tweet-' + props.tweetId);
        window.twttr.widgets.createTweet(
            props.tweetId,// ツイートID
            container,
            {
                align: "center",
                lang: "ja",
            }).then(el => {
            el.style.width = "auto";
            let sroot = el.shadowRoot;

            let embeddedTweet = sroot.querySelector('.EmbeddedTweet');
            embeddedTweet.style.maxWidth = "100%";

            let thumbnail = sroot.querySelector('.NaturalImage-image').cloneNode(true);
            let card = document.getElementById('img-' + props.tweetId);
            card.firstChild.appendChild(thumbnail);

            let textElem = sroot.querySelector('.Tweet-text');
            let text = '';
            for (let n of textElem.childNodes) {
                if (n.nodeName == '#text') {
                    text = text + n.nodeValue
                }
            }
            card.lastChild.textContent = text;
        });
    };

    useEffect( () => {
        let script = require('scriptjs');
        script('https://platform.twitter.com/widgets.js', () => {
        tweetSet()
        });
        console.log('twi')
    }, []);

    return (
        <div className={'tweet-container'} style={{ display: props.display }}>
            <div id={'tweet-' + props.tweetId}></div>
        </div>
    );
};

export default Embed;