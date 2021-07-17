//......Required Imports............
import React, { useContext } from "react";
import Context from "../contexts/context";
import Editor from "./Editor";
import "./bulma.min.css";
import "./index.css";

//function starts here
export default function Editorgrid() {
  const { mode, html, setHtml, css, setCss, js, setJs } = useContext(Context);
  return (
    <div className="runjs__editor">
      <div
        id="html-wrap"
        style={{ visibility: mode === "html" ? "visible" : "hidden" }}
      >
        <Editor
          language="xml"
          displayName="index.html"
          value={html}
          onChange={setHtml}
        />
      </div>
      <div
        id="css-wrap"
        style={{ visibility: mode === "css" ? "visible" : "hidden" }}
      >
        <Editor
          language="css"
          displayName="index.css"
          value={css}
          onChange={setCss}
        />
      </div>
      <div
        id="js-wrap"
        style={{ visibility: mode === "js" ? "visible" : "hidden" }}
      >
        <Editor
          language="javascript"
          displayName="index.js"
          value={js}
          onChange={setJs}
        />
      </div>
    </div>
  );
}
