/** @format */

import React, { Component } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Commentform from "./components/Commentform/Commentform";
import Comments from "./components/Comments/Comments";
import Videolist from "./components/Videolist/Videolist";
import data from "./data/video-details.json";
import list from "./data/videos.json";

const initialSelectedData = data[0];

class App extends Component {
  state = {
    list: list.filter((video) => video.id !== initialSelectedData.id),
    data,
    selectedData: initialSelectedData,
    selectedId: initialSelectedData.id,
  };

  clickHandler = (id) => {
    const newSelection = this.state.data.find((entry) => entry.id === id);
    this.setState({
      selectedData: newSelection,
      list: list.filter((video) => video.id !== id),
    });
  };

  defaultPrevent = (event) => {
    event.preventDefault();
  };

  render() {
    const { selectedData, selectedId, list } = this.state;

    return (
      <div className="App">
        <Nav defaultPrevent={this.defaultPrevent} />
        <Video content={selectedData} />
        <div className="sidePage">
          <div className="sidePage-left">
            <VideoInfo content={selectedData} />
            <Commentform defaultPrevent={this.defaultPrevent} />
            <Comments comments={selectedData.comments} />
          </div>
          <Videolist
            querySelector={this.ellipsisMake}
            clickHandler={this.clickHandler}
            selectedId={selectedId}
            list={list}
          />
        </div>
      </div>
    );
  }
}

export default App;
