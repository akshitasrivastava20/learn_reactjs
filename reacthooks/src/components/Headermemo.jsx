import React from "react"

const Headermemo=React.memo(function Header(props) {
  
    return <div>
      <h1>{props.title}</h1>
      

    </div>

})

export default Headermemo;