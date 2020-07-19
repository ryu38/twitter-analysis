import React, {useState, useEffect} from "react";
import Card from "./Card";

const List = props => {

    const DI = props.displayIndex;

    const [saveDI, setSaveDI] = useState(-1);

    const clickAction = (i) => {
        props.action(i)
    };

    useEffect(() => {
        if (DI == -1 && document.querySelector('.card-container')) {
            const listWidth = document.querySelector('.list').clientWidth;
            const cardHeight = document.querySelector('.card-container').clientHeight;
            if (listWidth == 1800) {
                window.scrollTo(0,(cardHeight*(saveDI-4))/4);
            } else
            if (listWidth <= 1350 && listWidth > 882) {
                window.scrollTo(0,(cardHeight*(saveDI-3))/3);
            } else
            if (listWidth <= 882) {
                window.scrollTo(0,(cardHeight*(saveDI-2))/2);
            }
        } else {
            setSaveDI(DI)
        }

    }, [DI]);

    return (
        <div className={'list'} style={{ display: DI == -1 ? "": "none" }}>
            {props.dataList.slice(0,props.max).map((item, index) => (
                <div className={'card-container'} onClick={() => clickAction(index)}>
                    <Card tweetId={item['tweet_id']} />
                </div>
            ))}
        </div>
    )
};

export default List