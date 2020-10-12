import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "./search/SearchPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchPage} />
        </Switch>
        <ToastContainer position="top-right" />
      </BrowserRouter>
    </>
  );
}

export default App;
