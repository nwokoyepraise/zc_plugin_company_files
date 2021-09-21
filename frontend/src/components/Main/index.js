import ComponentToTest from "../ComponentToTest";
import React from "react";
import SearchBar from "../SearchBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Files from "../Home/Files";
import ImagePreview from "../ImagePreview";
import FileUpload from "../Home/index";
import Home from "../Home";

import NewFolder from "../FolderCreation/Folder"
import TrashApp from "../TrashListView/TrashApp";

// import VideoPreview from "../VideoPreview";

const Main = () => {
  return (
    <Router basename="/companyfiles">
      <div className="bg-gray-50 h-screen flex flex-1 flex-col items-center overflow-y-auto ">
        <SearchBar />
        {/* <div className="block w-full h-11 bg-primary"></div> */}
        {/* <ComponentToTest /> */}

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/files" exact>
            <Files />
          </Route>
          <Route path="/starred" exact>
            <Starred />
          </Route>
          <Route path="/image">
            <ImagePreview />
          </Route>
          <Route path="/upload" exact>
            <FileUpload />
          </Route>
          <Route path="/newfolder" exact>
            <NewFolder />
          </Route>
          <Route path="/trashapp" exact>
            <TrashApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
