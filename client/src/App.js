import React from "react";

// Components
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/LoginForm/LoginForm";
import Logo from "./components/Logo/Logo";

import "./App.scss";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="wrapper">
        <Logo />
        <Header />
        <Content />
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;
