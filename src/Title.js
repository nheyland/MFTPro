import React from "react";
import { FaPlane } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Title = ({ setMenu, menu }) => {
  return (
    <>
      <div className="row title">
        <div className="col">
          <h2 className="header">My Flight Times</h2>
          <div className="row">
            <FaPlane />
            <h4 className="subheader">Training Coordination System</h4>
          </div>
        </div>
        <FiMenu size={35} onClick={() => setMenu(!menu)} className="pointer" />
      </div>
      <hr />
    </>
  );
};
export default Title;
