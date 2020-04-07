import React from "react";
import './Header.scss'

const Header = props => {
    return (
        // <div className={'header'}>
            <h1 className={'title'} style={{display: props.displayIndex == -1 ? "": "none" }}>Splatter</h1>
        // </div>
    )
};

export default Header