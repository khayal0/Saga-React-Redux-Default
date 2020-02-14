import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";
import "../styles/Button.css";

let Button = ({ getNews }) => <button onClick={getNews}>Get News</button>;

const mapDispatchToProps = {
  getNews: getNews
};

Button = connect(null, mapDispatchToProps)(Button);

export default Button;
