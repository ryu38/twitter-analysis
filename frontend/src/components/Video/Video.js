import React, {useState, useEffect} from "react";
import './Video.scss'
import Embed from "./Embed";
import Icon from "./Icon";

const Video = props => {

    const DI = props.displayIndex;
    const dataList = props.dataList.slice(0,props.max);

    return (
        <div className={'main'}>
            {dataList.map((item, index) => (
                <Embed
                    tweetId={item['tweet_id']}
                    display={DI == index ? "block" : "none"}
                    lastId={props.max-1 == index ? true : false}
                    changeLS={() => props.action.changeLS()}
                />
            ))}
            <div className={'icon'}  style={{ display: DI == -1 ? "none": "" }}>
                <Icon name={'left'} i={'fas fa-arrow-alt-circle-left'} action={() => props.action.displayBack()} class={ DI == 0 ? "hide": "" }/>
                <Icon name={'right'} i={'fas fas fa-arrow-alt-circle-right'} action={() => props.action.displayForward()} class={ DI == props.max - 1 ? "hide": "" }/>
                <Icon name={'back-list'} i={'fas fa-angle-double-left'} text={'リストにもどる'} action={() => props.action.backList()}/>
            </div>
        </div>
    )
};

export default Video;