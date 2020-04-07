import React, {useEffect, useState} from 'react';
import './App.scss';
import axios from 'axios';
import Video from "./components/Video/Video";
import List from "./components/List/List";
import Header from "./components/Header";
import Icon from "./components/Video/Icon";
import InfiniteScroll from "react-infinite-scroller";

const App = () => {

    const [displayIndex, setDisplayIndex] = useState(-1);

    const [dataList, setDataList] = useState([]);

    const [loadCount, setLoadCount] = useState(1);

    const loadMax = 40;
    let max = dataList.length < loadMax*loadCount ? dataList.length: loadMax*loadCount;

    const selectDisplay = index => {
        setDisplayIndex(index)
    };

    const displayBack = () => {
        setDisplayIndex(displayIndex - 1)
    };

    const displayForward = () => {
        setDisplayIndex(displayIndex + 1)
    };

    const backList = () => {
        setDisplayIndex(-1)
    };

    const loadMore = () => {
        setLoadCount(loadCount + 1)
    };

    const getAPI = () => {
        axios
            .get('http://localhost:8000/api')
            .then(res => {
                setDataList(res.data)
            })
    };

    useEffect(() => {
        getAPI()
    },[]);

    return (
    <div className={'app'}>
        <Header displayIndex={displayIndex}/>

        <Video
            dataList={dataList}
            displayIndex={displayIndex}
            action={{
                displayBack: () => displayBack(),
                displayForward: () => displayForward(),
                backList: () => backList(),
            }}
            max={max}
        />

        <List
            dataList={dataList}
            displayIndex={displayIndex}
            action={(i) => selectDisplay(i)}
            max={max}
        />

        { max != dataList.length && <Icon name={'load'} i={'fas fa-plus-circle'} action={() => loadMore()} class={ displayIndex == -1 ? "": "hide" } />}

    </div>
    );
};

export default App;
