//required imports
import React, { useEffect, useState } from "react";
import Context from "../contexts/context";
import Home from "./home";
import Localstore from "../storage/localstorage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./route";
import "./bulma.min.css";
import "./index.css";

//******************************************************************* */
//App function
export default function App() {
  const [dhtml, setdhtml] = useState("test");
  const [dcss, setdcss] = useState("");
  const [djs, setdjs] = useState("");
  let [mode, setMode] = useState("html");
  const [html, setHtml] = Localstore("html", dhtml);
  const [css, setCss] = Localstore("css", dcss);
  const [js, setJs] = Localstore("js", djs);
  const [srcDoc, setSrcDoc] = useState("");

//render everytime when html, css, js are changed 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!DOCTYPE html>
       <html lang="en">
	         <head>
	        </head>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Context.Provider
      value={{
        mode,
        setMode,
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
        srcDoc,
        setSrcDoc,
        dhtml,
        dcss,
        djs,
        setdhtml,
        setdcss,
        setdjs
      }}
    >
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/*" component={Post}></Route>
      </Router>
    </Context.Provider>
  );
}
