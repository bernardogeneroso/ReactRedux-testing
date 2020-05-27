import React from "react";
import { Provider } from "react-redux";

import SideBar from "./components/SideBar";
import Video from "./components/Video";

import store from "./store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <SideBar />
      </Provider>
    </div>
  );
};

export default App;
