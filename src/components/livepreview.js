import React, { useContext } from "react";
import Context from "../contexts/context";
import "./index.css";

export default function Livepreview() {
  const { srcDoc } = useContext(Context);
  return (
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
  );
}
