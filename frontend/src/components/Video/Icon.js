import React, {useState, useEffect} from "react";

const Icon = props => {

    return (
        <div
            className={[props.name, props.class].join(' ')}
            onClick={() => props.action()}
        >
            <i className={props.i}></i>
            {props.text}
        </div>
    )
};

export default Icon;