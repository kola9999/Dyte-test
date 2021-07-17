import React from "react";
import Editorgrid from "./editorgrid";
import "./bulma.min.css";
import "./index.css";
import Header from "./header";
import Livepreview from "./livepreview";
//******************************************************************* */
//Default Homescreen
export default function Home() {
  return (
    <div className="runjs">
      <Header />
      <Editorgrid />
      <Livepreview />
    </div>
  );
}
