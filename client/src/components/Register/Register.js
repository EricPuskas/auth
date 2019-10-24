import React from "react";
// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RegisterForm from "./RegisterForm";
import Logo from "../Logo/Logo";

const Register = () => {
  document.title = "GoldWin - Sign up";
  return (
    <>
      <Logo />
      <Header route="register" />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default Register;
