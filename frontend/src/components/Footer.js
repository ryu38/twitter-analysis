import React from "react";
import './Footer.scss'

const Footer = props => {
    return (
        <div className={'footer'} style={{display: props.displayIndex == -1 ? "": "none" }}>
            <div className={'dsc'}>
                <p>ロード中... 時間がかかる場合もあります</p>
            </div>
        </div>
    )
};

export default Footer