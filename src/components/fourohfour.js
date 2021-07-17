import React from 'react'
import errorimg from "../images/404.png";

//404 page
export default function Fourofour(){
  return(
<div>
<img style={{ display:"block",  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width:"40%", height: 400 }} src={errorimg} alt="page not found" />
</div>
  );
}