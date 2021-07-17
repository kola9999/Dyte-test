import * as firebase from "firebase";
import React, { useEffect, useState, useContext } from "react";
import Context from "../contexts/context";
import Editorgrid from "./editorgrid";
import "./bulma.min.css";
import "./index.css";
import Header from "./header";
import Fourofour from "./fourohfour";
//******************************************************************* */
export default function Post() {
  const { srcDoc, setSrcDoc } = useContext(Context);
  const [data, setdata] = useState([]);
  const [istrue, setistrue] = useState("false");
  let url = window.location.pathname;
  let newurl = url.replace("/id=", "");
  useEffect(() => {
    firebase
      .database()
      .ref("/editor/" + newurl)
      .once("value", (snapshot) => {
        if (snapshot.val() != null) {
          setdata({
            ...snapshot.val()
          });
          setistrue(true);
        }
      });
  }, [newurl]);

  if (istrue === true) {
    if (data.length > 0) {
      setSrcDoc(`
        <!DOCTYPE html>
       <html lang="en">
	         <head>
	        </head>
          <body>${data.HTML}</body>
          <style>${data.CSS}</style>
          <script>${data.JS}</script>
        </html>
      `);
    }
    return (
      <div className="runjs">
        <Header />
        <Editorgrid />
        <div className="runjs__preview code-mirror-wrapper">
          <div className="editor-title">Live View</div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  } else {
    return <Fourofour />;
  }
}
