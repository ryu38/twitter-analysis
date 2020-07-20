import React, {useEffect, useState} from 'react';
import './App.scss';
import axios from 'axios';
import Video from "./components/Video/Video";
import List from "./components/List/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Icon from "./components/Video/Icon";
import InfiniteScroll from "react-infinite-scroller";

const App = () => {

    const [displayIndex, setDisplayIndex] = useState(-1);

    const [dataList, setDataList] = useState([]);

    const [loadCount, setLoadCount] = useState(1);

    const [loadStatus, setLoadStatus] = useState('loading');

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
        changeLS('loading')
    };

    const getAPI = () => {
        axios
            .get('http://buzzclip.pythonanywhere.com/api')
            // .get('http://127.0.0.1:8000/api')
            .then(res => {
                setDataList(res.data)
            })
    };

    const changeLS = status => {
        setLoadStatus(status)
    };

    useEffect(() => {
        console.log('getAPI');
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
                changeLS: () => changeLS('end'),
            }}
            max={max}
        />

        <List
            dataList={dataList}
            displayIndex={displayIndex}
            action={(i) => selectDisplay(i)}
            max={max}
        />

        { loadStatus == 'loading' && <Footer/>}

        { (max != dataList.length && loadStatus == 'end') &&
            <Icon name={'load'} i={'fas fa-plus-circle'} action={() => loadMore()} class={ displayIndex == -1 ? "": "hide" } />
        }

    </div>
    );
};

export default App;
