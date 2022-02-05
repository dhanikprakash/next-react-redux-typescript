import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchContainer from "./search/SearchContainer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchContainer} />
        </Switch>
        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}

export default App;
