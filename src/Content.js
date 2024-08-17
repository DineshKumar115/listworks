import React from "react";

import ItemList from "./ItemList";

const Content = ({items,handleDelete,handleCheck}) => {   
  
  return (
    <main>
      {(items.length) ?(

<ItemList
items={items}
handleCheck={handleCheck}
handleDelete={handleDelete}
/>

        ):(<p className="word" style={{marginTop:'2rem'}}>YOUR LIST IS EMPTY</p>)}
    
      

    </main>
  )
}

export default Content