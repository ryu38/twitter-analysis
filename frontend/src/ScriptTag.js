import {Component} from "react";
import React from "react";
import {PropTypes} from "prop-types";

const id = Math.random().toString();

class ScriptTag extends Component {
    componentDidMount() {
        const {src, async, ...rest} = this.props;
        const script = document.createElement("script");

        script.src = src;
        script.async = async || false;

        // if (rest) {
        //     for (let key in rest) {
        //         console.log(key);
        //         script.key = rest[key];
        //     }
        // }

        console.log(script);

        document.getElementById(id).replaceWith(script)
    }

    render() {
        return <div id={id}/>
    }
}

ScriptTag.propTypes = {
    src: PropTypes.string.isRequired,
    async: PropTypes.bool
};

export default ScriptTag