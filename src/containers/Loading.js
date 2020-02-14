import React from "react";
import { connect } from "react-redux";
import img from "./loading_spinner.gif";
let Loading = props =>
  props.loading ? (
    <div style={{ textAlign: "center", margin: "200px" }}>
      <img width="150px" src={img} alt="loading" />
      {/* <h3>Loading</h3> */}
    </div>
  ) : null;
const mapStateToProps = state => ({ loading: state.loading });
Loading = connect(mapStateToProps, null)(Loading);
export default Loading;
