import React from "react";
import tickets from "./../img/tickets.png";


function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={tickets} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;