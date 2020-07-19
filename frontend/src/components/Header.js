import React from "react";
import './Header.scss'

const Header = props => {
    return (
        <div className={'header'} style={{display: props.displayIndex == -1 ? "": "none" }}>
            {/*<h1 className={'title'} style={{display: props.displayIndex == -1 ? "": "none" }}>Splatter</h1>*/}
            <div className={'logo'}>
                <img src="https://fontmeme.com/permalink/200408/77701b9d03a603fd471c47c958551652.png" alt="protocol-font" border="0"/>
            </div>
            <div className={'dsc'}>
                <p>twitterで人気が高いスプラトゥーン2のイカした動画を一挙ご紹介！</p>
            </div>
        </div>
    )
};

export default Header