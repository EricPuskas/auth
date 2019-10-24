import React from "react";
// Components
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";
import Logo from "../Logo/Logo";

const Auth = () => {
  return (
    <>
      <Logo />
      <Header route="login" />
      <Content />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Auth;
