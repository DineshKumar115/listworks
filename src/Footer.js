import React from "react";

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>No.of.Task in the { length>1?"Lists" :"List"} { length>1? "are" :"is"}: {length} </footer>
  )
}

export default Footer