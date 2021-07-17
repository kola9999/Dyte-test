import * as firebase from "firebase";
import React, { useContext } from "react";
import Context from "../contexts/context";
import "./bulma.min.css";
import "./index.css";
import logo from "../images/editor.png";
import { IconCss } from "./icon";
import { AiOutlineHtml5 } from "react-icons/ai";
import {RiDeleteBin6Line} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
//Header component(Files section)
export default function Header() {
  const { mode, setMode, html, css, js } = useContext(Context);
  var database = firebase.database();
  var newPostKey = database.ref().child("dyte-test").push().key;
  //sending html, css, js to firebase realtime database
  const onSubmit = (data) => {
    firebase
      .database()
      .ref("editor/" + newPostKey)
      .update({
        HTML: html,
        CSS: css,
        JS: js
      });
    window.alert(`${window.location.host}/id=${newPostKey}`);
  };
  //navbar component
  return (
    <div className="runjs__header">
      <div class="nav center" style={{ paddingLeft: 20, width: 240 }}>
        <img style={{ height: 36 }} src={logo} alt="" />
        <div style={{ width: 40 }}></div>

        <div
          class={mode === "html" ? "tool-icon selected" : "tool-icon"}
          onClick={() => setMode("html")}
        >
          <AiOutlineHtml5 size="3rem" />
        </div>

        <div
          class={mode === "css" ? "tool-icon selected" : "tool-icon"}
          name="css"
          onClick={() => setMode("css")}
        >
          <IconCss></IconCss>
        </div>
        <div
          class={mode === "js" ? "tool-icon selected" : "tool-icon"}
          onClick={() => setMode("js")}
        >
          <IoLogoJavascript size="1.5rem" />
        </div>
      </div>
      <div class="menu">
        <div
          class={mode === "js" ? "tool-icon selected" : "tool-icon"}
          onClick={() => {localStorage.clear()}}
        >
          <RiDeleteBin6Line size="1.5rem" />
        </div>
        <button style={{ color: "ffffff" }} onClick={onSubmit}>
          {" "}
          share
        </button>
      </div>
    </div>
  );
}
