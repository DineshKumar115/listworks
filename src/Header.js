import React from "react"

const Header = ({title}) => {
    const headerStyle ={
        backgroundColor:'black',
        color:'white',
        display:'flex',
        justifyContent:'center'
    };
  return (
     
    <header style={headerStyle}> 
      
        <h1>{title}</h1>
        </header>
  )
}
 Header.defaultProps ={
  title:"To Do List"
}
export default Header